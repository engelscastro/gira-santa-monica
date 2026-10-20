import React, { useState, useEffect } from 'react';
import { ThemeId } from '../types/game';
import { THEMES } from '../data/themes';
import { STUDY_MATERIALS } from '../data/materials';
import { speech } from '../utils/speech';
import { BookOpen, Search, X, Check, Lightbulb, Volume2, Square } from 'lucide-react';

interface StudyGuideModalProps {
  initialThemeId?: ThemeId;
  onClose: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({
  initialThemeId = 'vacinas',
  onClose,
}) => {
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>(initialThemeId);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    const unsub = speech.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      unsub();
      speech.stop();
    };
  }, []);

  const themeList = Object.values(THEMES);
  const activeTopic = STUDY_MATERIALS[activeThemeId];
  const activeTheme = THEMES[activeThemeId];

  // Stop speech when switching theme tabs
  const handleSelectThemeTab = (themeId: ThemeId) => {
    speech.stop();
    setActiveThemeId(themeId);
  };

  const handleSpeakSummary = () => {
    if (isSpeaking) {
      speech.stop();
      return;
    }
    const highlights = activeTopic.highlights.join('. ');
    const text = `${activeTopic.title}, com a supervisão de ${activeTheme.mentor}. Resumo dos principais pontos: ${highlights}. Dicas práticas da equipe: ${activeTopic.officialTips.join('. ')}`;
    speech.speak(text);
  };

  const handleSpeakText = (text: string) => {
    if (isSpeaking) {
      speech.stop();
    } else {
      speech.speak(text);
    }
  };

  // Simple filter for search term
  const matchesSearch = (text: string) => {
    if (!searchTerm.trim()) return true;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl">
              <BookOpen className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-['Fredoka']">
                Material de Apoio e Guia Educativo
              </h2>
              <p className="text-xs text-teal-100">
                Maternidade Escola Santa Mônica (MESM - UNCISAL)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar guia de apoio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar & Theme Navigation */}
        <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por assunto (ex: umbigo, vacina, engasgo, banho, febre)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
            />
          </div>

          {/* Theme Horizontal Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {themeList.map((theme) => {
              const isActive = activeThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => handleSelectThemeTab(theme.id as ThemeId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{theme.badgeSymbol}</span>
                  <span>{theme.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Active Theme Banner */}
          <div 
            className="p-4 rounded-2xl text-white flex flex-col sm:flex-row sm:items-start justify-between gap-3 shadow-sm"
            style={{ backgroundColor: activeTheme.color }}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0 p-1 bg-white/20 rounded-xl">
                {activeTheme.badgeSymbol}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase bg-black/25 px-2 py-0.5 rounded-full">
                    Eixo {activeTheme.number}
                  </span>
                  <span className="text-xs text-white/90">
                    Responsável: {activeTheme.mentor}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-['Fredoka'] mt-0.5">
                  {activeTopic.title}
                </h3>
                <p className="text-xs text-white/90 mt-1">
                  {activeTheme.description}
                </p>
              </div>
            </div>

            {/* Read axis summary button */}
            <button
              type="button"
              onClick={handleSpeakSummary}
              className={`self-start px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm transition-all ${
                isSpeaking
                  ? 'bg-amber-400 text-slate-950 animate-pulse'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              title="Ouvir resumo do eixo em voz alta"
              aria-label="Ouvir resumo do eixo em voz alta"
            >
              {isSpeaking ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Pausar Leitura</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Ouvir Resumo</span>
                </>
              )}
            </button>
          </div>

          {/* Highlights checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Pontos-Chave Mais Importantes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeTopic.highlights
                .filter(matchesSearch)
                .map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-950 flex-1">
                      {highlight}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSpeakText(highlight)}
                      className="text-emerald-700 hover:text-emerald-900 p-1 rounded-md hover:bg-emerald-100 cursor-pointer"
                      title="Ouvir este ponto"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Educational Content paragraphs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Conteúdo Explicativo Detalhado
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {activeTopic.content
                .filter(matchesSearch)
                .map((paragraph, idx) => (
                  <div key={idx} className="pb-2 border-b border-slate-200/60 last:border-0 last:pb-0 flex items-start justify-between gap-3">
                    <p className="flex-1">
                      {paragraph}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleSpeakText(paragraph)}
                      className="text-slate-400 hover:text-teal-700 p-1 rounded-md hover:bg-slate-200/50 cursor-pointer shrink-0"
                      title="Ouvir este parágrafo"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Official Tips */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Orientações Práticas da Equipe Santa Mônica</span>
            </h4>
            <div className="space-y-2">
              {activeTopic.officialTips
                .filter(matchesSearch)
                .map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      👉 <strong>Dica {idx + 1}:</strong> {tip}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSpeakText(`Dica número ${idx + 1}: ${tip}`)}
                      className="text-amber-800 hover:text-amber-950 p-1 rounded-md hover:bg-amber-100 cursor-pointer shrink-0"
                      title="Ouvir esta dica em voz alta"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-700 font-medium">
            Materiais baseados nas diretrizes do Ministério da Saúde & Protocolos MESM/UNCISAL
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
          >
            Voltar ao Jogo
          </button>
        </div>
      </div>
    </div>
  );
};
