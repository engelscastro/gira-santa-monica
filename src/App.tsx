/**
 * Gira Santa Mônica - Perguntados da Gestante
 * Jogo educativo para gestantes e puérperas
 * Contexto: Maternidade Escola Santa Mônica (MESM - UNCISAL)
 */

import { useState, useEffect, useCallback } from 'react';
import { ThemeId, Question, PlayerStats, PowerType } from './types/game';
import { THEMES, WheelSlice } from './data/themes';
import { QUESTIONS } from './data/questions';
import { Navbar } from './components/Navbar';
import { RouletteWheel } from './components/RouletteWheel';
import { BadgeRack } from './components/BadgeRack';
import { QuestionModal } from './components/QuestionModal';
import { ThemeSelectorModal } from './components/ThemeSelectorModal';
import { StudyGuideModal } from './components/StudyGuideModal';
import { VictoryCertificateModal } from './components/VictoryCertificateModal';
import { AboutModal, RulesModal } from './components/InfoModals';
import { JewelGame } from './components/JewelGame';
import { sound } from './utils/sound';
import confetti from 'canvas-confetti';
import { BookOpen, Sparkles, Heart, Award, Clock } from 'lucide-react';

const INITIAL_STATS: PlayerStats = {
  score: 0,
  totalAnswered: 0,
  correctAnswers: 0,
  streak: 0,
  bestStreak: 0,
  crownMeter: 0,
  badges: {
    vacinas: false,
    higiene: false,
    primeiros_socorros: false,
    aleitamento: false,
    sono_prevencao: false,
    marcos_desenvolvimento: false,
  },
  powers: {
    rowBlast: 1,   // Destruir Linha (Laser)
    bombSquare: 1, // Bomba 3x3 (Explosão em Quadrado)
    crossBlast: 1, // Super Cruz (Linha + Coluna)
  },
  powersVersion: 2,
};

export default function App() {
  const [stats, setStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem('gira_sm_stats');
      if (saved) {
        const parsed = JSON.parse(saved);
        const hasV2 = parsed.powersVersion === 2;
        return {
          ...INITIAL_STATS,
          ...parsed,
          powersVersion: 2,
          powers: hasV2 && parsed.powers
            ? {
                rowBlast: typeof parsed.powers.rowBlast === 'number' ? parsed.powers.rowBlast : 1,
                bombSquare: typeof parsed.powers.bombSquare === 'number' ? parsed.powers.bombSquare : 1,
                crossBlast: typeof parsed.powers.crossBlast === 'number' ? parsed.powers.crossBlast : 1,
              }
            : INITIAL_STATS.powers,
        };
      }
    } catch {
      // ignore
    }
    return INITIAL_STATS;
  });

  const [activeTab, setActiveTab] = useState<'WHEEL' | 'JEWEL'>('WHEEL');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [isCrownChallenge, setIsCrownChallenge] = useState<boolean>(false);
  const [showThemeSelector, setShowThemeSelector] = useState<boolean>(false);
  const [showStudyGuide, setShowStudyGuide] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [showVictory, setShowVictory] = useState<boolean>(false);
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);

  // Persist stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gira_sm_stats', JSON.stringify(stats));
    } catch {
      // ignore
    }
  }, [stats]);

  // Pick question for a theme
  const pickQuestion = useCallback((themeId: ThemeId): Question => {
    const themeQuestions = QUESTIONS.filter((q) => q.themeId === themeId);
    // Find unasked questions
    let available = themeQuestions.filter((q) => !usedQuestionIds.includes(q.id));
    if (available.length === 0) {
      // Reset history for this theme
      available = themeQuestions;
      setUsedQuestionIds((prev) => prev.filter((id) => !themeQuestions.some((q) => q.id === id)));
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex] || themeQuestions[0];
    setUsedQuestionIds((prev) => [...prev, chosen.id]);
    return chosen;
  }, [usedQuestionIds]);

  // Wheel spin complete callback
  const handleSpinComplete = useCallback((slice: WheelSlice) => {
    if (slice.id === 'crown') {
      // Landed on Crown ("Escolha o tema!")
      setShowThemeSelector(true);
    } else {
      // Landed on regular theme
      // Check if crown meter is 3, trigger badge challenge
      const isChallenge = stats.crownMeter >= 3 && !stats.badges[slice.id];
      const q = pickQuestion(slice.id);
      setActiveQuestion(q);
      setIsCrownChallenge(isChallenge);
    }
  }, [stats.crownMeter, stats.badges, pickQuestion]);

  // Theme selected from Crown modal
  const handleThemeSelected = (themeId: ThemeId, asCrownChallenge: boolean) => {
    setShowThemeSelector(false);
    const q = pickQuestion(themeId);
    setActiveQuestion(q);
    setIsCrownChallenge(asCrownChallenge);
  };

  // Answer callback with power-up rewards
  const handleAnswer = (isCorrect: boolean, themeId: ThemeId, wonBadge: boolean, awardedPower?: PowerType) => {
    setActiveQuestion(null);

    setStats((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const newBest = Math.max(prev.bestStreak, newStreak);
      const newScore = isCorrect ? prev.score + (isCrownChallenge ? 25 : 10) : prev.score;
      const newTotal = prev.totalAnswered + 1;
      const newCorrect = isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers;
      
      let newCrownMeter = prev.crownMeter;
      if (isCrownChallenge) {
        newCrownMeter = 0; // Reset after challenge
      } else if (isCorrect) {
        newCrownMeter = Math.min(3, prev.crownMeter + 1);
      }

      const updatedBadges = {
        ...prev.badges,
        [themeId]: prev.badges[themeId] || wonBadge,
      };

      // Add earned power-up to inventory
      const updatedPowers = { ...prev.powers };
      if (isCorrect && awardedPower) {
        if (awardedPower === 'ROW_BLAST') updatedPowers.rowBlast += 1;
        else if (awardedPower === 'BOMB_SQUARE') updatedPowers.bombSquare += 1;
        else if (awardedPower === 'CROSS_BLAST') updatedPowers.crossBlast += 1;
      }

      // Check if all 6 badges earned!
      const totalBadgesEarned = Object.values(updatedBadges).filter(Boolean).length;
      if (totalBadgesEarned === 6 && Object.values(prev.badges).filter(Boolean).length < 6) {
        sound.playVictory();
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 },
          });
          setShowVictory(true);
        }, 600);
      }

      return {
        score: newScore,
        totalAnswered: newTotal,
        correctAnswers: newCorrect,
        streak: newStreak,
        bestStreak: newBest,
        crownMeter: newCrownMeter,
        badges: updatedBadges,
        powers: updatedPowers,
      };
    });
  };

  const handleConsumePower = (power: PowerType) => {
    setStats((prev) => {
      const updated = { ...prev.powers };
      if (power === 'ROW_BLAST') updated.rowBlast = Math.max(0, updated.rowBlast - 1);
      else if (power === 'BOMB_SQUARE') updated.bombSquare = Math.max(0, updated.bombSquare - 1);
      else if (power === 'CROSS_BLAST') updated.crossBlast = Math.max(0, updated.crossBlast - 1);
      return {
        ...prev,
        powers: updated,
      };
    });
  };

  const handleJewelMatchQuestion = (themeId: ThemeId, isSpecial: boolean) => {
    const q = pickQuestion(themeId);
    setActiveQuestion(q);
    setIsCrownChallenge(isSpecial);
  };

  const handleAddScore = (points: number) => {
    setStats((prev) => ({
      ...prev,
      score: prev.score + points,
    }));
  };

  const handleResetGame = () => {
    if (window.confirm('Deseja reiniciar a pontuação e os troféus para jogar do início?')) {
      setStats(INITIAL_STATS);
      setUsedQuestionIds([]);
      setShowVictory(false);
    }
  };

  const totalBadgesEarned = Object.values(stats.badges).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-slate-50 to-amber-50/40 text-slate-800 font-['Plus_Jakarta_Sans'] flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenStudyGuide={() => setShowStudyGuide(true)}
        onOpenAbout={() => setShowAbout(true)}
        onOpenRules={() => setShowRules(true)}
        onResetGame={handleResetGame}
        onOpenDiploma={() => setShowVictory(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-4 md:py-6 space-y-6">
        
        {/* Hospital Institution Kicker & Title */}
        <section className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm relative overflow-hidden">
          {/* Subtle decorative background curves */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-teal-100/40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-rose-100/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-teal-800 tracking-wide uppercase">
                <span>Maternidade Escola Santa Mônica</span>
                <span className="text-slate-300">·</span>
                <span>UNCISAL</span>
                <span className="text-slate-300">·</span>
                <span className="text-rose-600 font-semibold flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" /> Cuidado Humanizado
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Fredoka'] tracking-tight">
                Gira Santa Mônica: O Quiz da Gestante
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-balance">
                Gire a roleta, teste seus conhecimentos nos 6 eixos de saúde e conquiste os troféus com as orientações de nossos enfermeiros e pediatras.
              </p>
            </div>

            {/* Quick Actions (Study Guide + Timer Toggle) */}
            <div className="flex flex-wrap md:flex-col items-stretch sm:items-end gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setShowStudyGuide(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Abrir Material de Apoio</span>
              </button>

              <div 
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center justify-center gap-1.5 shadow-xs"
                title="Modo oficial com 30 segundos por pergunta"
              >
                <Clock className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Cronômetro: 30s por pergunta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Game Mode Tab Switcher: Roleta vs Máquina de Jackpot */}
        <div className="flex items-center justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80 shadow-xs gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('WHEEL')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-['Fredoka'] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'WHEEL'
                  ? 'bg-white text-teal-900 shadow-md scale-100 ring-2 ring-teal-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <span className="text-base">🎡</span>
              <span>Roleta dos 6 Eixos</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('JEWEL')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-['Fredoka'] transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'JEWEL'
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md scale-100 ring-2 ring-cyan-300'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <span className="text-base">💎</span>
              <span>Joias Match-3</span>
              <span className="text-[10px] bg-rose-500 text-white font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse hidden sm:inline">
                Novo
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Roleta dos 6 Eixos */}
        {activeTab === 'WHEEL' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fade-in">
          
          {/* Left Column: Interactive Roulette Wheel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center relative">
            <div className="w-full flex items-center justify-between mb-2 px-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎡</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-['Fredoka']">
                  Roleta Interativa Oficial
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowRules(true)}
                className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
              >
                Regras do Jogo
              </button>
            </div>

            {/* The SVG Roulette Wheel Component */}
            <RouletteWheel
              onSpinComplete={handleSpinComplete}
              isSpinning={isSpinning}
              setIsSpinning={setIsSpinning}
            />

            {/* Wheel Sector Mentors Quick Legend */}
            <div className="w-full mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
              {Object.values(THEMES).map((t) => (
                <div key={t.id} className="flex items-center gap-1.5 text-slate-600">
                  <span 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="truncate font-semibold">{t.number}. {t.name}</span>
                  <span className="text-slate-400 text-[10px]">({t.mentor})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Player Dashboard & Collected Badges */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Badges Rack Component */}
            <BadgeRack
              stats={stats}
              onOpenVictory={() => setShowVictory(true)}
            />

            {/* Educational Mini Highlight Card */}
            <div className="bg-gradient-to-br from-teal-50 to-sky-50 rounded-3xl p-5 border border-teal-200/70 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Por Que Este Jogo Existe?</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Durante o pré-natal e o pós-parto, as gestantes recebem muitas informações de vizinhos, internet e familiares. Este jogo foi desenhado pela equipe da <strong>Maternidade Escola Santa Mônica</strong> para transformar os cuidados do bebê em um momento leve, seguro e cientificamente embasado.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-teal-800 font-semibold">
                  Tudo 100% alinhado ao SUS & MS
                </span>
                <button
                  type="button"
                  onClick={() => setShowStudyGuide(true)}
                  className="font-bold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer"
                >
                  Consultar Dicas →
                </button>
              </div>
            </div>

            {/* Hospital Assistance Contacts */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <span>Contatos Úteis da Maternidade</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                  <span className="font-semibold">Banco de Leite Humano MESM:</span>
                  <span className="font-bold text-teal-700">(82) 3315-4400</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                  <span className="font-semibold">Emergência SAMU (Brasil):</span>
                  <span className="font-bold text-rose-600">192</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                  <span className="font-semibold">Corpo de Bombeiros:</span>
                  <span className="font-bold text-amber-600">193</span>
                </div>
              </div>
            </div>

            {/* Reset Game option */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={handleResetGame}
                className="text-[11px] text-slate-600 hover:text-slate-800 hover:underline cursor-pointer"
              >
                Reiniciar pontuação e histórico do jogo
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Tab 2: Joias Match-3 dos 6 Eixos */}
        {activeTab === 'JEWEL' && (
          <div className="space-y-6 animate-fade-in">
            {/* The Match-3 Jewel Game */}
            <JewelGame
              onMatchQuestion={handleJewelMatchQuestion}
              onAddScore={handleAddScore}
              score={stats.score}
              powers={stats.powers}
              onConsumePower={handleConsumePower}
            />

            {/* Badges Rack in Jewel View */}
            <BadgeRack
              stats={stats}
              onOpenVictory={() => setShowVictory(true)}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-8 bg-white border-t border-slate-200 text-slate-700 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs">
          <div>
            <p className="font-bold text-slate-700">
              Gira Santa Mônica · Jogo Educativo para Gestantes e Famílias
            </p>
            <p className="text-slate-700 mt-0.5">
              Maternidade Escola Santa Mônica · Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL)
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
            <button 
              type="button" 
              onClick={() => setShowAbout(true)} 
              className="hover:text-teal-700 cursor-pointer"
            >
              Sobre a Instituição
            </button>
            <span>·</span>
            <button 
              type="button" 
              onClick={() => setShowStudyGuide(true)} 
              className="hover:text-teal-700 cursor-pointer"
            >
              Material de Apoio
            </button>
            <span>·</span>
            <span>SUS Alagoas</span>
          </div>
        </div>
      </footer>

      {/* Modals and Dialogs */}
      {activeQuestion && (
        <QuestionModal
          question={activeQuestion}
          isCrownChallenge={isCrownChallenge}
          onAnswer={handleAnswer}
          onClose={() => setActiveQuestion(null)}
          timerEnabled={true}
        />
      )}

      {showThemeSelector && (
        <ThemeSelectorModal
          badges={stats.badges}
          onSelectTheme={handleThemeSelected}
          onClose={() => setShowThemeSelector(false)}
        />
      )}

      {showStudyGuide && (
        <StudyGuideModal
          onClose={() => setShowStudyGuide(false)}
        />
      )}

      {showVictory && (
        <VictoryCertificateModal
          stats={stats}
          onRestart={handleResetGame}
          onClose={() => setShowVictory(false)}
        />
      )}

      {showAbout && (
        <AboutModal
          onClose={() => setShowAbout(false)}
          onOpenStudyGuide={() => {
            setShowAbout(false);
            setShowStudyGuide(true);
          }}
        />
      )}

      {showRules && (
        <RulesModal
          onClose={() => setShowRules(false)}
        />
      )}

      {/* Floating Trophy Toast when completed */}
      {totalBadgesEarned === 6 && !showVictory && (
        <button
          type="button"
          onClick={() => setShowVictory(true)}
          className="fixed bottom-5 right-5 z-30 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-2xl shadow-xl flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform animate-bounce"
        >
          <Award className="w-5 h-5 text-slate-950" />
          <span className="text-xs sm:text-sm">Ver Diploma de Conclusão!</span>
        </button>
      )}
    </div>
  );
}
