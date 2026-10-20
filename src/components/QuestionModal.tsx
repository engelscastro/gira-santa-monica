import React, { useState, useEffect, useCallback } from 'react';
import { Question, ThemeId, PowerType } from '../types/game';
import { THEMES } from '../data/themes';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Award, BookOpen, Clock, ChevronRight, Volume2, Square, Zap, Flame } from 'lucide-react';

interface QuestionModalProps {
  question: Question;
  isCrownChallenge: boolean;
  onAnswer: (isCorrect: boolean, themeId: ThemeId, wonBadge: boolean, awardedPower?: PowerType) => void;
  onClose: () => void;
  timerEnabled: boolean;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  isCrownChallenge,
  onAnswer,
}) => {
  const theme = THEMES[question.themeId];
  const [selectedKey, setSelectedKey] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [awardedPower, setAwardedPower] = useState<PowerType | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timeExpired, setTimeExpired] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Subscribe to speech controller
  useEffect(() => {
    const unsubscribe = speech.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      unsubscribe();
      speech.stop();
    };
  }, []);

  const getQuestionNarrationText = useCallback(() => {
    const optionsText = question.options.map((o) => `Opção ${o.key}: ${o.text}`).join('. ');
    return `Eixo ${theme.number}: ${theme.name}, com a supervisão de ${theme.mentor}. Pergunta: ${question.question}. ${optionsText}`;
  }, [question, theme]);

  const getExplanationNarrationText = useCallback(() => {
    const isCorrect = selectedKey === question.correctAnswer;
    const status = isCorrect ? 'Parabéns, você acertou!' : 'Quase lá! Veja a explicação de apoio.';
    let text = `${status} Explicação do Ministério da Saúde e da Maternidade Santa Mônica: ${question.justification}. `;
    if (selectedKey && selectedKey !== question.correctAnswer && question.wrongJustifications?.[selectedKey]) {
      text += `Sobre a opção ${selectedKey}: ${question.wrongJustifications[selectedKey]}`;
    }
    return text;
  }, [selectedKey, question]);

  // Auto-narration on open if user enabled auto-voice
  useEffect(() => {
    if (speech.isAutoEnabled() && !hasAnswered) {
      const timer = setTimeout(() => {
        speech.speak(getQuestionNarrationText());
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [getQuestionNarrationText, hasAnswered]);

  // Timer is always active (classic Perguntados standard: 30 seconds)
  useEffect(() => {
    if (hasAnswered) return;

    if (timeLeft <= 0) {
      setTimeExpired(true);
      setHasAnswered(true);
      sound.playWrong();
      speech.stop();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 6 && prev > 1) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasAnswered]);

  const handleToggleSpeakQuestion = () => {
    if (isSpeaking) {
      speech.stop();
    } else {
      speech.speak(getQuestionNarrationText());
    }
  };

  const handleToggleSpeakExplanation = () => {
    if (isSpeaking) {
      speech.stop();
    } else {
      speech.speak(getExplanationNarrationText());
    }
  };

  const handleSelect = (key: 'A' | 'B' | 'C' | 'D') => {
    if (hasAnswered) return;

    speech.stop();
    setSelectedKey(key);
    setHasAnswered(true);

    const isCorrect = key === question.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();

      // Determine power-up awarded
      let power: PowerType = 'BOMB_SQUARE';
      if (isCrownChallenge) {
        power = 'CROSS_BLAST';
      } else {
        // Alternate/randomly grant Bomb or Row Laser
        power = Math.random() < 0.5 ? 'ROW_BLAST' : 'BOMB_SQUARE';
      }
      setAwardedPower(power);

      setTimeout(() => {
        sound.playPowerEarned();
      }, 350);

      if (isCrownChallenge) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      sound.playWrong();
    }
  };

  const handleContinue = () => {
    speech.stop();
    const isCorrect = selectedKey === question.correctAnswer;
    const wonBadge = isCorrect && isCrownChallenge;
    onAnswer(isCorrect, question.themeId, wonBadge, isCorrect && awardedPower ? awardedPower : undefined);
  };

  const isCorrectAnswer = selectedKey === question.correctAnswer;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="w-full max-w-xl my-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transition-all transform scale-100 flex flex-col max-h-[92vh]"
      >
        {/* Header Ribbon themed to current axis */}
        <div 
          className="p-4 sm:p-5 text-white flex items-center justify-between relative shadow-md"
          style={{ backgroundColor: theme.color }}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner">
              {theme.badgeSymbol}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-full">
                  Eixo {theme.number}
                </span>
                <span className="text-xs font-medium text-white/90">
                  com {theme.mentor}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-['Fredoka'] leading-tight drop-shadow-sm">
                {theme.name}
              </h2>
            </div>
          </div>

          {/* Right Header Badges: Crown challenge or Timer */}
          <div className="flex items-center gap-2">
            {isCrownChallenge && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-900 rounded-full font-bold text-xs shadow-md animate-pulse">
                <span>👑</span>
                <span>DESAFIO DO TROFÉU</span>
              </div>
            )}

            {!hasAnswered && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tabular-nums transition-colors shadow-sm ${
                timeLeft <= 10 ? 'bg-rose-600 text-white animate-bounce' : 'bg-black/30 text-white'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            )}
          </div>
        </div>

        {/* Animated Countdown Progress Bar */}
        {!hasAnswered && (
          <div className="w-full bg-slate-200 h-1.5 relative overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-linear ${
                timeLeft > 15 ? 'bg-emerald-500' : timeLeft > 7 ? 'bg-amber-500' : 'bg-rose-500 animate-pulse'
              }`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        )}

        {/* Question Topic Pill & Question Text */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            {question.topic && (
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 tracking-wide">
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: theme.color }} />
                <span>{question.topic}</span>
                {question.reference && (
                  <>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-none">{question.reference}</span>
                  </>
                )}
              </div>
            )}

            {/* Read aloud button for question & options */}
            {!hasAnswered && (
              <button
                type="button"
                onClick={handleToggleSpeakQuestion}
                className={`self-start sm:self-auto py-1 px-2.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  isSpeaking
                    ? 'bg-amber-100 border-amber-300 text-amber-950 animate-pulse'
                    : 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100'
                }`}
                title="Ler em voz alta"
                aria-label="Ouvir pergunta e alternativas em voz alta"
              >
                {isSpeaking ? (
                  <>
                    <Square className="w-3 h-3 fill-amber-800 text-amber-800" />
                    <span>Pausar Voz</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-teal-700" />
                    <span>Ouvir Pergunta</span>
                  </>
                )}
              </button>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-['Plus_Jakarta_Sans']">
            {question.question}
          </h3>

          {/* Options List */}
          <div className="space-y-2.5">
            {question.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isCorrect = opt.key === question.correctAnswer;
              
              let buttonStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
              let badgeStyle = 'bg-slate-200 text-slate-700';

              if (hasAnswered) {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30';
                  badgeStyle = 'bg-emerald-500 text-white';
                } else if (isSelected) {
                  buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/30';
                  badgeStyle = 'bg-rose-500 text-white';
                } else {
                  buttonStyle = 'opacity-50 bg-slate-50 border-slate-200 text-slate-500';
                  badgeStyle = 'bg-slate-100 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelect(opt.key)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${buttonStyle} ${
                    !hasAnswered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${badgeStyle}`}>
                    {opt.key}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed pt-0.5 flex-1">
                    {opt.text}
                  </span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Time Expired Notice */}
          {timeExpired && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
              Tempo esgotado! Veja abaixo a resposta correta e a explicação educativa.
            </div>
          )}

          {/* Educational Feedback Section (Revealed after answering) */}
          {hasAnswered && (
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                    isCorrectAnswer ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    {isCorrectAnswer ? '✓' : 'ℹ'}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900">
                    {isCorrectAnswer ? 'Parabéns, você acertou!' : 'Quase lá! Veja a explicação de apoio:'}
                  </h4>
                </div>

                {/* Read aloud explanation button */}
                <button
                  type="button"
                  onClick={handleToggleSpeakExplanation}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border cursor-pointer transition-all ${
                    isSpeaking
                      ? 'bg-amber-100 border-amber-300 text-amber-950 animate-pulse'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs'
                  }`}
                  title="Ouvir a explicação em voz alta"
                  aria-label="Ouvir a explicação em voz alta"
                >
                  {isSpeaking ? (
                    <>
                      <Square className="w-3 h-3 fill-amber-800 text-amber-800" />
                      <span>Pausar Voz</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-teal-700" />
                      <span>Ouvir Explicação</span>
                    </>
                  )}
                </button>
              </div>

              {/* Justification of Correct Answer */}
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-emerald-700 block mb-1">
                  Explicação do Ministério da Saúde / MESM:
                </strong>
                {question.justification}
              </div>

              {/* Justifications of Wrong options (if selected or educational insight) */}
              {selectedKey && selectedKey !== question.correctAnswer && question.wrongJustifications?.[selectedKey] && (
                <div className="p-2.5 bg-rose-50/80 rounded-xl border border-rose-200 text-xs text-rose-800">
                  <strong>Por que a opção {selectedKey} é inadequada: </strong>
                  {question.wrongJustifications[selectedKey]}
                </div>
              )}

              {/* Ego state / senses from official material if present */}
              {(question.egoState || question.senses) && (
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                  {question.egoState && (
                    <span><strong>Abordagem CTM3:</strong> {question.egoState}</span>
                  )}
                  {question.senses && (
                    <span>· <strong>Sentidos:</strong> {question.senses}</span>
                  )}
                </div>
              )}

              {/* Crown badge won announcement */}
              {isCrownChallenge && isCorrectAnswer && (
                <div className="p-3 bg-amber-100 border border-amber-300 rounded-xl flex items-center gap-3 text-amber-950">
                  <Award className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Novo Troféu Desbloqueado!</h5>
                    <p className="text-xs">Você conquistou o emblema <strong>{theme.badgeTitle}</strong>!</p>
                  </div>
                </div>
              )}

              {/* Power-up earned celebration card */}
              {isCorrectAnswer && awardedPower && (
                <div className="p-3.5 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-300 rounded-2xl flex items-center justify-between gap-3 text-amber-950 shadow-sm animate-fade-in">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-300 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                      {awardedPower === 'BOMB_SQUARE' ? '💣' : awardedPower === 'ROW_BLAST' ? '⚡' : '💥'}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                          Poder Desbloqueado!
                        </span>
                        <span className="text-[11px] font-bold text-amber-900">
                          Para o Jogo de Joias
                        </span>
                      </div>
                      <h5 className="font-extrabold text-sm text-slate-900 mt-0.5">
                        {awardedPower === 'BOMB_SQUARE'
                          ? 'Bomba Quadrada 3x3'
                          : awardedPower === 'ROW_BLAST'
                          ? 'Raio Laser de Linha'
                          : 'Super Raio Cruzado (Linha + Coluna)'}
                      </h5>
                      <p className="text-[11px] text-slate-600">
                        {awardedPower === 'BOMB_SQUARE'
                          ? 'Explode e destrói um bloco de 9 joias (área 3x3) no tabuleiro!'
                          : awardedPower === 'ROW_BLAST'
                          ? 'Vaporiza uma linha horizontal inteira com um raio laser!'
                          : 'Dispara um super raio em cruz destruindo linha e coluna inteiras!'}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs rounded-xl shadow-xs shrink-0 whitespace-nowrap">
                    +1 Poder
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Educação em Saúde · Maternidade Escola Santa Mônica</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {hasAnswered ? (
              <button
                type="button"
                onClick={handleContinue}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-sm sm:text-base shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <span>Continuar</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-slate-500 italic">
                Escolha uma alternativa para continuar
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
