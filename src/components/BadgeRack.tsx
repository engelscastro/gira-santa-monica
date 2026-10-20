import React from 'react';
import { ThemeId, PlayerStats } from '../types/game';
import { THEMES } from '../data/themes';
import { Trophy, Flame, Crown } from 'lucide-react';

interface BadgeRackProps {
  stats: PlayerStats;
  onOpenVictory: () => void;
}

export const BadgeRack: React.FC<BadgeRackProps> = ({ stats, onOpenVictory }) => {
  const themeList = Object.values(THEMES);
  const earnedCount = Object.values(stats.badges).filter(Boolean).length;
  const isComplete = earnedCount === 6;

  return (
    <div className="w-full bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-4">
      {/* Top row: Badges Title, Score, and Streak */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 font-['Fredoka']">
              Troféus da Gestante
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {earnedCount} de 6 eixos conquistados
            </span>
          </div>
        </div>

        {/* Stats Pill cluster */}
        <div className="flex items-center gap-2">
          {/* Streak */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-900">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>{stats.streak} {stats.streak === 1 ? 'acerto' : 'acertos'} seguidos</span>
          </div>

          {/* Points */}
          <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-extrabold text-slate-700 tabular-nums">
            {stats.score} pts
          </div>
        </div>
      </div>

      {/* 6 Badges Rack */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {themeList.map((theme) => {
          const isEarned = stats.badges[theme.id as ThemeId];

          return (
            <div
              key={theme.id}
              className={`relative flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all ${
                isEarned
                  ? 'bg-amber-50/60 border-amber-400 shadow-sm scale-100'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              {/* Badge Symbol */}
              <div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-1.5 shadow-sm transition-transform ${
                  isEarned ? 'scale-110 shadow-amber-200' : 'grayscale'
                }`}
                style={{
                  backgroundColor: isEarned ? theme.color : '#E2E8F0',
                  color: '#FFFFFF',
                }}
              >
                {theme.badgeSymbol}
              </div>

              {/* Number and Label */}
              <span className="text-[11px] font-bold text-slate-800 text-center truncate max-w-full">
                {theme.shortName}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                {theme.mentor}
              </span>

              {/* Status Indicator */}
              {isEarned ? (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-bold shadow-sm">
                  ✓
                </span>
              ) : (
                <span className="text-[9px] text-slate-400 mt-0.5">
                  Pendente
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Crown Gauge (Perguntados style: every 3 correct answers gives a Crown Challenge!) */}
      <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-semibold text-slate-700">
            Medidor da Coroa:
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((step) => {
              const active = stats.crownMeter >= step;
              return (
                <div
                  key={step}
                  className={`w-5 h-2.5 rounded-full transition-colors ${
                    active ? 'bg-amber-400 shadow-sm' : 'bg-slate-200'
                  }`}
                />
              );
            })}
          </div>
          <span className="text-[11px] text-slate-500">
            (3 acertos = Desafio da Coroa!)
          </span>
        </div>

        {/* Victory diploma button */}
        <div className="flex items-center gap-2">
          {isComplete ? (
            <button
              type="button"
              onClick={onOpenVictory}
              className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-extrabold text-xs rounded-xl shadow cursor-pointer transition-all animate-pulse flex items-center gap-1.5"
            >
              <span>🏆 Ver & Compartilhar Diploma</span>
              <span className="text-[10px] bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded-md font-black">
                Redes Sociais
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenVictory}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1 cursor-pointer transition-colors"
              title="Visualizar modelo do diploma e opções de compartilhamento"
            >
              <span>🎓 Ver Diploma / Compartilhar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
