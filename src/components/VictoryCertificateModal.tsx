import React, { useState } from 'react';
import { PlayerStats } from '../types/game';
import { THEMES } from '../data/themes';
import {
  Award,
  Printer,
  RefreshCw,
  X,
  Share2,
  Download,
  Copy,
  Check,
  Sparkles,
  Send,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  downloadCertificatePNG,
  getCertificateBlob,
  getShareMessage,
  shareViaWhatsApp,
  shareViaFacebook,
  shareViaTwitter,
  shareViaTelegram,
} from '../utils/certificateGenerator';

interface VictoryCertificateModalProps {
  stats: PlayerStats;
  onRestart: () => void;
  onClose: () => void;
}

export const VictoryCertificateModal: React.FC<VictoryCertificateModalProps> = ({
  stats,
  onRestart,
  onClose,
}) => {
  const [playerName, setPlayerName] = useState<string>('Futura Mamãe / Família Santa Mônica');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showShareSuccess, setShowShareSuccess] = useState<string | null>(null);

  const themeList = Object.values(THEMES);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://maternidade-santa-monica.uncisal.edu.br';

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadImage = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        downloadCertificatePNG(playerName, stats);
        setShowShareSuccess('Imagem baixada com sucesso! Você já pode publicar no seu Instagram Stories ou Feed.');
        setTimeout(() => setShowShareSuccess(null), 4500);
      } catch (err) {
        console.error('Download error:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 100);
  };

  const handleCopyMessage = async () => {
    const text = `${getShareMessage(playerName, stats)}\n${shareUrl}`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setShowShareSuccess('Mensagem do diploma copiada! Cole em qualquer rede social ou grupo.');
      setTimeout(() => {
        setCopied(false);
        setShowShareSuccess(null);
      }, 4000);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (!navigator.share) {
      handleCopyMessage();
      return;
    }

    try {
      setIsGenerating(true);
      const blob = await getCertificateBlob(playerName, stats);
      if (blob && navigator.canShare) {
        const file = new File([blob], 'diploma-santa-monica.png', { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Diploma Oficial - Gira Santa Mônica (UNCISAL)',
            text: getShareMessage(playerName, stats),
            files: [file],
          });
          setShowShareSuccess('Compartilhado com sucesso!');
          setTimeout(() => setShowShareSuccess(null), 3000);
          return;
        }
      }

      await navigator.share({
        title: 'Diploma Oficial - Gira Santa Mônica (UNCISAL)',
        text: getShareMessage(playerName, stats),
        url: shareUrl,
      });
      setShowShareSuccess('Compartilhado com sucesso!');
      setTimeout(() => setShowShareSuccess(null), 3000);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        handleCopyMessage();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/85 backdrop-blur-md overflow-y-auto animate-fade-in print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400 flex flex-col my-auto print:border-none print:shadow-none print:max-w-none">
        
        {/* Top Control Bar (hidden in print) */}
        <div className="p-3 sm:p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 print:hidden border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span>Diploma Oficial de Conclusão · Maternidade Santa Mônica</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors border border-amber-400/30"
              title="Imprimir ou Salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SOCIAL SHARE HERO STRIP (hidden in print) */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-3.5 sm:p-4 border-b border-amber-300 print:hidden shadow-inner">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-slate-950 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide font-['Fredoka']">
                  Compartilhe seu Diploma nas Redes Sociais!
                </h3>
                <p className="text-[11px] sm:text-xs font-medium text-slate-900 opacity-90">
                  Mostre sua conquista para a família no WhatsApp, Instagram, Facebook e Status.
                </p>
              </div>
            </div>

            {/* Quick action buttons on hero strip */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-end shrink-0">
              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={() => shareViaWhatsApp(playerName, stats, shareUrl)}
                className="px-3 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                title="Compartilhar no WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </button>

              {/* Instagram / Status Download PNG */}
              <button
                type="button"
                onClick={handleDownloadImage}
                disabled={isGenerating}
                className="px-3 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-95 text-white font-extrabold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
                title="Baixar imagem em alta resolução para Instagram Stories ou Feed"
              >
                <Download className="w-4 h-4" />
                <span>{isGenerating ? 'Gerando...' : 'Baixar Imagem / Stories'}</span>
              </button>

              {/* Native Mobile Share if available */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="px-3 py-2 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
                  title="Compartilhar pelo celular"
                >
                  <Share2 className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Compartilhar</span>
                </button>
              )}
            </div>
          </div>

          {/* Success Toast */}
          {showShareSuccess && (
            <div className="mt-2.5 p-2 bg-slate-950 text-amber-300 text-xs font-bold rounded-xl flex items-center justify-center gap-2 animate-fade-in shadow-md">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{showShareSuccess}</span>
            </div>
          )}
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-5 sm:p-8 md:p-10 bg-[#FFFDF7] text-slate-800 text-center relative border-8 border-double border-amber-600/35 m-3 sm:m-5 rounded-2xl shadow-sm">
          {/* Watermark / Background Ornament */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
            <span className="text-[140px] sm:text-[180px] font-serif font-black">MESM</span>
          </div>

          {/* Hospital Seal & Header */}
          <div className="space-y-1 mb-4">
            <span className="text-4xl">👑</span>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest font-black text-amber-800">
              UNIVERSIDADE ESTADUAL DE CIÊNCIAS DA SAÚDE DE ALAGOAS - UNCISAL
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-['Fredoka']">
              MATERNIDADE ESCOLA SANTA MÔNICA
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-teal-800">
              Programa de Educação em Saúde & Preparação da Gestante · SUS Alagoas
            </p>
          </div>

          {/* Certificate Title */}
          <div className="my-3 py-2 border-y-2 border-amber-400/80 max-w-md mx-auto">
            <h2 className="text-base sm:text-xl font-black uppercase tracking-wider text-amber-900 font-['Fredoka'] flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Certificado de Excelência</span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </h2>
          </div>

          {/* Certificate Body Text */}
          <div className="max-w-xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5">
            <p className="text-slate-600 font-medium">
              Certificamos com muito carinho e orgulho que
            </p>

            {/* Editable Name */}
            <div className="py-1">
              {isEditingName ? (
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="border-b-2 border-amber-600 text-base sm:text-xl font-bold text-slate-900 text-center bg-white px-3 py-1 rounded shadow-xs focus:outline-none"
                    placeholder="Seu nome completo"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsEditingName(false)}
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Salvar
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setIsEditingName(true)}
                  className="group text-base sm:text-2xl font-black text-amber-950 font-['Fredoka'] border-b-2 border-dashed border-amber-400 inline-flex items-center gap-2 px-4 py-0.5 cursor-pointer hover:bg-amber-100/50 rounded-lg transition-colors"
                  title="Clique para editar seu nome antes de compartilhar"
                >
                  <span>{playerName}</span>
                  <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold group-hover:bg-amber-300">
                    ✏️ Editar Nome
                  </span>
                </div>
              )}
            </div>

            <p>
              completou com maestria todos os <strong>6 eixos temáticos</strong> da Roleta Educativa <em>Gira Santa Mônica</em>, demonstrando pleno conhecimento nos cuidados essenciais com a gestação, parto, amamentação e cuidados com o bebê.
            </p>
          </div>

          {/* All 6 Badges Displayed */}
          <div className="my-5 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 max-w-lg mx-auto">
            {themeList.map((t) => (
              <div key={t.id} className="flex flex-col items-center bg-amber-50/70 p-2 rounded-2xl border border-amber-200 shadow-2xs">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-sm text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.badgeSymbol}
                </div>
                <span className="text-[10px] font-bold text-slate-800 mt-1 truncate max-w-full">
                  {t.shortName}
                </span>
                <span className="text-[8px] font-extrabold text-emerald-700 flex items-center gap-0.5">
                  ✓ Aprovada
                </span>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-300 text-xs text-amber-950 font-bold mb-5 shadow-xs">
            <span>⭐ Pontuação: {stats.score} pts</span>
            <span>·</span>
            <span>🎯 {stats.correctAnswers} acertos</span>
            <span>·</span>
            <span>🔥 Recorde: {stats.bestStreak} seguidos</span>
          </div>

          {/* Signatures & Seal */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4 border-t border-slate-200 max-w-lg mx-auto text-center">
            <div>
              <div className="h-8 border-b border-slate-400 flex items-end justify-center pb-1">
                <span className="font-serif italic text-xs text-slate-700">Equipe Multiprofissional MESM</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase font-bold mt-1 block">
                Maternidade Santa Mônica
              </span>
            </div>

            <div>
              <div className="h-8 border-b border-slate-400 flex items-end justify-center pb-1">
                <span className="font-serif italic text-xs text-slate-700">Comissão de Humanização</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase font-bold mt-1 block">
                UNCISAL / SUS Alagoas
              </span>
            </div>
          </div>
        </div>

        {/* FULL SOCIAL MEDIA SHARE HUB (hidden in print) */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 space-y-3.5 print:hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5 font-['Fredoka']">
                <Share2 className="w-4 h-4 text-amber-600" />
                <span>Escolha onde compartilhar:</span>
              </h4>
              <p className="text-[11px] text-slate-500">
                Envie para amigos e familiares ou publique nas suas redes com 1 toque:
              </p>
            </div>

            {/* Copy message button */}
            <button
              type="button"
              onClick={handleCopyMessage}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors border ${
                copied
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
              title="Copiar texto formatado e link para a área de transferência"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto e Link'}</span>
            </button>
          </div>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => shareViaWhatsApp(playerName, stats, shareUrl)}
              className="p-3 bg-[#25D366] hover:bg-[#1faa4e] text-white font-bold text-xs rounded-2xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </button>

            {/* Instagram / Status (Image PNG) */}
            <button
              type="button"
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="p-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs rounded-2xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Salvando...' : 'Instagram / Stories'}</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={() => shareViaFacebook(shareUrl, getShareMessage(playerName, stats))}
              className="p-3 bg-[#1877F2] hover:bg-[#1462c9] text-white font-bold text-xs rounded-2xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Facebook</span>
            </button>

            {/* Telegram */}
            <button
              type="button"
              onClick={() => shareViaTelegram(playerName, stats, shareUrl)}
              className="p-3 bg-[#229ED9] hover:bg-[#1c83b4] text-white font-bold text-xs rounded-2xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </button>
          </div>

          {/* Bottom Footer Actions */}
          <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Jogar Novamente</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors border border-slate-300"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / PDF</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadImage}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow cursor-pointer transition-transform active:scale-95 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Salvar Imagem do Diploma</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
