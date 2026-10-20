import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, BookOpen, Info, HelpCircle, Award } from 'lucide-react';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';

interface NavbarProps {
  activeTab: 'WHEEL' | 'JEWEL';
  onSelectTab: (tab: 'WHEEL' | 'JEWEL') => void;
  onOpenStudyGuide: () => void;
  onOpenAbout: () => void;
  onOpenRules: () => void;
  onResetGame: () => void;
  onOpenDiploma?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenStudyGuide,
  onOpenAbout,
  onOpenRules,
  onOpenDiploma,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(sound.getMuted());
  const [isSpeechAuto, setIsSpeechAuto] = useState<boolean>(speech.isAutoEnabled());

  useEffect(() => {
    setIsSpeechAuto(speech.isAutoEnabled());
  }, []);

  const handleToggleSound = () => {
    const newMuted = sound.toggleMute();
    setIsMuted(newMuted);
  };

  const handleToggleSpeech = () => {
    const newAuto = speech.toggleAuto();
    setIsSpeechAuto(newAuto);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Brand wordmark (single line, no adjacent descriptor badges) */}
        <button 
          type="button"
          onClick={() => onSelectTab('WHEEL')}
          className="text-lg sm:text-xl font-extrabold text-teal-800 tracking-tight font-['Fredoka'] whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer text-left"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400 text-white flex items-center justify-center text-sm shadow-sm">
            🎡
          </span>
          <span>Gira Santa Mônica</span>
        </button>

        {/* Zone 2: Concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <button 
            type="button"
            onClick={() => onSelectTab('WHEEL')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'WHEEL' ? 'text-teal-700 font-bold border-b-2 border-teal-600 pb-0.5' : 'hover:text-teal-700'
            }`}
          >
            <span>🎡 Roleta</span>
          </button>

          <button 
            type="button"
            onClick={() => onSelectTab('JEWEL')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'JEWEL' ? 'text-cyan-700 font-bold border-b-2 border-cyan-600 pb-0.5' : 'hover:text-cyan-700'
            }`}
          >
            <span>💎 Joias Match-3</span>
          </button>

          <button 
            type="button"
            onClick={onOpenStudyGuide}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>Material de Apoio</span>
          </button>

          <button 
            type="button"
            onClick={onOpenAbout}
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Info className="w-4 h-4 text-rose-500" />
            <span>Sobre a Maternidade</span>
          </button>

          {onOpenDiploma && (
            <button
              type="button"
              onClick={onOpenDiploma}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer"
              title="Ver e compartilhar diploma nas redes sociais"
            >
              <Award className="w-3.5 h-3.5" />
              <span>🎓 Diploma</span>
            </button>
          )}
        </nav>

        {/* Zone 3: 1 primary action area (Speech Narration & Sound FX Toggles) */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenDiploma && (
            <button
              type="button"
              onClick={onOpenDiploma}
              className="md:hidden p-2 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors cursor-pointer"
              title="Ver Diploma e Compartilhar"
            >
              <Award className="w-5 h-5 text-amber-700" />
            </button>
          )}

          <button
            type="button"
            onClick={onOpenStudyGuide}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Material de Apoio"
          >
            <BookOpen className="w-5 h-5 text-teal-700" />
          </button>

          {/* Voice Narration Accessibility Toggle */}
          <button
            type="button"
            onClick={handleToggleSpeech}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border ${
              isSpeechAuto
                ? 'bg-purple-50 text-purple-900 border-purple-300 shadow-sm'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
            }`}
            title={isSpeechAuto ? 'Leitura em voz alta automática ligada' : 'Ativar leitura automática em voz alta'}
            aria-label="Alternar leitura em voz alta"
          >
            <Volume2 className={`w-4 h-4 ${isSpeechAuto ? 'text-purple-600 animate-pulse' : 'text-slate-500'}`} />
            <span className="hidden sm:inline">{isSpeechAuto ? 'Voz Automática: ON' : 'Voz: Manual'}</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border ${
              isMuted
                ? 'bg-slate-100 text-slate-500 border-slate-200'
                : 'bg-teal-50 text-teal-800 border-teal-200 shadow-sm'
            }`}
            title={isMuted ? 'Ativar Efeitos Sonoros' : 'Silenciar Efeitos Sonoros'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-teal-600" />}
            <span className="hidden sm:inline">{isMuted ? 'Sem Efeitos' : 'Efeitos: ON'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
