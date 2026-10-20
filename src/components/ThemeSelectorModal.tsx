import React from 'react';
import { ThemeId } from '../types/game';
import { THEMES } from '../data/themes';
import { Sparkles } from 'lucide-react';

interface ThemeSelectorModalProps {
  badges: Record<ThemeId, boolean>;
  onSelectTheme: (themeId: ThemeId, isCrownChallenge: boolean) => void;
  onClose: () => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({
  badges,
  onSelectTheme,
}) => {
  const themeList = Object.values(THEMES);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-300">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white text-center relative">
          <div className="w-14 h-14 mx-auto mb-2 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg animate-bounce">
            👑
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
            Giro Dourado Santa Mônica
          </span>
          <h2 className="text-2xl font-black font-['Fredoka'] mt-1">
            Escolha o Tema!
          </h2>
          <p className="text-xs sm:text-sm text-purple-100 max-w-md mx-auto mt-1">
            Você tirou a Coroa! Selecione qualquer um dos 6 eixos temáticos abaixo para responder e concorrer ao troféu de especialista.
          </p>
        </div>

        {/* Theme Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
          {themeList.map((theme) => {
            const hasBadge = badges[theme.id];

            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onSelectTheme(theme.id, true)}
                className="group relative p-3.5 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-3 bg-white hover:shadow-md"
                style={{ borderColor: theme.color }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-sm"
                  style={{ backgroundColor: `${theme.color}20` }}
                >
                  {theme.badgeSymbol}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white"
                      style={{ backgroundColor: theme.color }}
                    >
                      {theme.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 truncate">
                      com {theme.mentor}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 truncate mt-0.5">
                    {theme.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-[11px]">
                    {hasBadge ? (
                      <span className="text-emerald-800 font-semibold flex items-center gap-0.5">
                        ✓ Troféu já conquistado
                      </span>
                    ) : (
                      <span className="text-amber-800 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        Dispute este troféu!
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            Dica: Acerte a pergunta para colecionar o troféu deste eixo!
          </p>
        </div>
      </div>
    </div>
  );
};
