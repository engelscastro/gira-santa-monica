import React from 'react';
import { X, Heart, Shield, PhoneCall, Award, BookOpen } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
  onOpenStudyGuide: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose, onOpenStudyGuide }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[88vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl">
              🏥
            </span>
            <div>
              <h2 className="text-lg font-bold font-['Fredoka']">
                Maternidade Escola Santa Mônica
              </h2>
              <span className="text-xs text-rose-100">
                MESM / UNCISAL · Maceió - Alagoas
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            A <strong>Maternidade Escola Santa Mônica (MESM)</strong> é unidade assistencial da Universidade Estadual de Ciências da Saúde de Alagoas (UNCISAL), referência estadual no atendimento de gestantes e recém-nascidos de médio e alto risco pelo Sistema Único de Saúde (SUS).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200 flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 text-xs">Banco de Leite Humano</strong>
                <span className="text-[11px] text-slate-600">
                  Coleta, processa e distribui leite materno para salvar bebês prematuros na UTI Neonatal.
                </span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 text-xs">Hospital Amigo da Criança</strong>
                <span className="text-[11px] text-slate-600">
                  Compromisso com os 10 passos para o sucesso da amamentação e acolhimento humanizado.
                </span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 text-xs">Método Canguru</strong>
                <span className="text-[11px] text-slate-600">
                  Estímulo ao contato pele a pele precoce entre mãe/pai e recém-nascido.
                </span>
              </div>
            </div>

            <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 flex items-start gap-2.5">
              <PhoneCall className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 text-xs">Emergências SUS</strong>
                <span className="text-[11px] text-slate-600">
                  SAMU: Ligue 192 · Disque Saúde: 136 · Atendimento 24h.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
            <strong>Objetivo Educacional do Jogo:</strong> Estimular o aprendizado descontraído e a autoconfiança de gestantes, puérperas, parceiros e rede de apoio familiar, desmistificando mitos populares e reforçando práticas baseadas em evidências científicas.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onOpenStudyGuide}
            className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ver Material de Apoio Completo</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

interface RulesModalProps {
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎡</span>
            <div>
              <h2 className="text-lg font-bold font-['Fredoka']">
                Como Jogar o Perguntados da Gestante
              </h2>
              <span className="text-xs text-indigo-200">
                Regras e Dicas do Jogo
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <strong className="block text-slate-900">Gire a Roleta:</strong>
              Toque no botão central "GIRAR" para sortear um dos eixos temáticos ou a Coroa.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <strong className="block text-slate-900">Responda à Questão:</strong>
              Cada questão possui 4 opções e traz o raciocínio oficial com explicações de por que a resposta é certa e quais os riscos das erradas.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <strong className="block text-slate-900">Conquiste os 6 Troféus:</strong>
              Acertando 3 questões ou caindo na Coroa ("Escolha o tema!"), você joga pelo Troféu do eixo. Junte todos os 6 para ganhar o Certificado de Excelência Santa Mônica!
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center shrink-0">
              4
            </span>
            <div>
              <strong className="block text-slate-900">Joias Match-3 (Estilo Jewel) & Poderes:</strong>
              Arraste e alinhe os ícones dos 6 eixos. Ao completar 3 alinhamentos de um mesmo tema, a pergunta educativa é lançada! Acertando, você ganha poderes especiais (Laser de Linha, Bomba de Área 3x3 e Raio em Cruz) para usar diretamente no tabuleiro.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
              5
            </span>
            <div>
              <strong className="block text-slate-900">Diploma Oficial e Compartilhamento:</strong>
              Conquiste os troféus dos 6 eixos de saúde infantil para desbloquear seu Diploma de Conclusão da Santa Mônica, com download em alta definição e compartilhamento direto no WhatsApp, Instagram e redes sociais!
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0">
              6
            </span>
            <div>
              <strong className="block text-slate-900">Acessibilidade e Leitura por Voz:</strong>
              Toque no botão "Ouvir Pergunta" ou ative "Voz Automática: ON" na barra superior para escutar o áudio sintetizado em português.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
          >
            Vamos Jogar!
          </button>
        </div>
      </div>
    </div>
  );
};
