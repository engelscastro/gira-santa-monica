import { PlayerStats } from '../types/game';
import { THEMES } from '../data/themes';

/**
 * Generates an elegant high-resolution HTML5 Canvas representation of the diploma.
 * Resolution: 1200 x 900 px (3:2 / 4:3 high-res certificate format)
 */
export function generateCertificateCanvas(
  playerName: string,
  stats: PlayerStats
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 900;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  // Background Parchment
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 900);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.5, '#FFFBF0');
  bgGrad.addColorStop(1, '#FFF9E6');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 900);

  // Subtle decorative background watermark
  ctx.save();
  ctx.font = '900 160px serif';
  ctx.fillStyle = 'rgba(180, 83, 9, 0.03)';
  ctx.textAlign = 'center';
  ctx.fillText('MESM · UNCISAL', 600, 520);
  ctx.restore();

  // Outer Gold Border
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#B45309'; // amber-700
  ctx.strokeRect(28, 28, 1144, 844);

  // Inner Fine Gold Border
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#D97706'; // amber-600
  ctx.strokeRect(42, 42, 1116, 816);

  // Dotted Accent Border
  ctx.save();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#F59E0B'; // amber-500
  ctx.setLineDash([6, 6]);
  ctx.strokeRect(52, 52, 1096, 796);
  ctx.restore();

  // Corner Ornaments
  const drawCornerFlourish = (x: number, y: number, angle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 26px serif';
    ctx.fillText('⚜', -12, 12);
    ctx.restore();
  };
  drawCornerFlourish(62, 62, 0);
  drawCornerFlourish(1138, 62, Math.PI / 2);
  drawCornerFlourish(1138, 838, Math.PI);
  drawCornerFlourish(62, 838, -Math.PI / 2);

  // Header: Institution Kicker
  ctx.textAlign = 'center';
  ctx.fillStyle = '#78350F'; // amber-900
  ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('UNIVERSIDADE ESTADUAL DE CIÊNCIAS DA SAÚDE DE ALAGOAS - UNCISAL', 600, 95);

  // Main Institution Title
  ctx.fillStyle = '#0F172A'; // slate-900
  ctx.font = '900 34px "Fredoka", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('MATERNIDADE ESCOLA SANTA MÔNICA', 600, 140);

  // Program Subtitle
  ctx.fillStyle = '#0F766E'; // teal-700
  ctx.font = 'bold 17px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Programa de Educação em Saúde & Cuidado Humanizado da Gestante (SUS)', 600, 172);

  // Gold Ribbon Title Banner
  const bannerGrad = ctx.createLinearGradient(350, 200, 850, 255);
  bannerGrad.addColorStop(0, '#D97706');
  bannerGrad.addColorStop(0.5, '#F59E0B');
  bannerGrad.addColorStop(1, '#D97706');
  ctx.fillStyle = bannerGrad;
  ctx.beginPath();
  ctx.roundRect(330, 205, 540, 52, 14);
  ctx.fill();

  ctx.strokeStyle = '#92400E';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 24px "Fredoka", "Plus Jakarta Sans", sans-serif';
  ctx.shadowColor = 'rgba(0,0,0,0.25)';
  ctx.shadowBlur = 4;
  ctx.fillText('🏆 CERTIFICADO DE EXCELÊNCIA 🏆', 600, 240);
  ctx.shadowBlur = 0;

  // Body text
  ctx.fillStyle = '#475569'; // slate-600
  ctx.font = '19px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Certificamos com muito carinho e reconhecimento que', 600, 305);

  // Graduate Name Box
  const nameToDraw = playerName.trim() || 'Futura Mamãe / Família Santa Mônica';
  ctx.fillStyle = '#78350F'; // amber-900
  ctx.font = '900 36px "Fredoka", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(nameToDraw, 600, 355);

  // Underline beneath name
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(350, 370);
  ctx.lineTo(850, 370);
  ctx.stroke();

  // Achievement description paragraph
  ctx.fillStyle = '#334155'; // slate-700
  ctx.font = '17px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('completou com maestria todos os 6 eixos de saúde materno-infantil da', 600, 410);
  
  ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#0F172A';
  ctx.fillText('Roleta Educativa Gira Santa Mônica (UNCISAL / MESM)', 600, 438);

  ctx.font = '16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('demonstrando pleno conhecimento nos cuidados essenciais com a gestação e o recém-nascido.', 600, 466);

  // 6 Thematic Badges Display
  const themeList = Object.values(THEMES);
  const badgeStartX = 180;
  const badgeGap = 168;
  const badgeCenterY = 550;

  themeList.forEach((theme, index) => {
    const cx = badgeStartX + index * badgeGap;

    // Outer Circle
    ctx.fillStyle = theme.color;
    ctx.beginPath();
    ctx.arc(cx, badgeCenterY, 34, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Shadow on circle
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Emoji/Symbol
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(theme.badgeSymbol, cx, badgeCenterY + 10);

    // Theme Short Name
    ctx.fillStyle = '#1E293B';
    ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(theme.shortName, cx, badgeCenterY + 54);

    // Checkmark Badge
    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(cx + 22, badgeCenterY - 22, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('✓', cx + 22, badgeCenterY - 18);
  });

  // Stats Cluster Pill
  const statsBoxY = 665;
  ctx.fillStyle = '#FEF3C7'; // amber-100
  ctx.beginPath();
  ctx.roundRect(320, statsBoxY, 560, 42, 21);
  ctx.fill();
  ctx.strokeStyle = '#FCD34D';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#78350F';
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(
    `⭐ Pontuação: ${stats.score} pts   ·   🎯 ${stats.correctAnswers} Acertos   ·   🔥 Recorde: ${stats.bestStreak} seguidos`,
    600,
    statsBoxY + 27
  );

  // Signatures Section
  const sigY = 780;
  
  // Left Signature
  ctx.strokeStyle = '#94A3B8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(180, sigY);
  ctx.lineTo(460, sigY);
  ctx.stroke();

  ctx.font = 'italic 16px serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('Equipe Multiprofissional MESM', 320, sigY - 8);

  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#64748B';
  ctx.fillText('Maternidade Escola Santa Mônica', 320, sigY + 18);
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('UNCISAL / SUS Alagoas', 320, sigY + 34);

  // Right Signature
  ctx.beginPath();
  ctx.moveTo(740, sigY);
  ctx.lineTo(1020, sigY);
  ctx.stroke();

  ctx.font = 'italic 16px serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('Comissão de Humanização & Ensino', 880, sigY - 8);

  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#64748B';
  ctx.fillText('Supervisão Acadêmica UNCISAL', 880, sigY + 18);
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Gira Santa Mônica Educativo', 880, sigY + 34);

  // Official Stamp Seal in Center
  ctx.save();
  ctx.translate(600, 775);
  ctx.fillStyle = '#B45309';
  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#FDE68A';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '22px sans-serif';
  ctx.fillText('👑', 0, 6);

  ctx.font = 'bold 8px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('OFICIAL', 0, 22);
  ctx.restore();

  // Bottom date & location
  const today = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  ctx.fillStyle = '#94A3B8';
  ctx.font = '12px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`Maceió - AL, ${today}`, 600, 842);

  return canvas;
}

/**
 * Downloads the high-resolution certificate image as a PNG file.
 */
export function downloadCertificatePNG(
  playerName: string,
  stats: PlayerStats,
  filename?: string
): void {
  const canvas = generateCertificateCanvas(playerName, stats);
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  const safeName = (playerName || 'diploma').toLowerCase().replace(/[^a-z0-9]/g, '_');
  link.download = filename || `diploma_santa_monica_${safeName}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Converts the canvas to a Blob file for native Web Share API
 */
export function getCertificateBlob(
  playerName: string,
  stats: PlayerStats
): Promise<Blob | null> {
  return new Promise((resolve) => {
    const canvas = generateCertificateCanvas(playerName, stats);
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/png');
  });
}

/**
 * Builds the message text tailored for social media sharing.
 */
export function getShareMessage(playerName: string, stats: PlayerStats): string {
  const name = playerName.trim() || 'Futura Mamãe';
  return (
    `🎓 *Diploma de Excelência - Gira Santa Mônica* 👑\n\n` +
    `Parabéns, ${name}! Concluiu com maestria todos os 6 eixos temáticos de saúde materno-infantil da *Maternidade Escola Santa Mônica (UNCISAL / SUS Alagoas)*!\n\n` +
    `⭐ *Pontuação:* ${stats.score} pontos\n` +
    `🎯 *Acertos:* ${stats.correctAnswers} perguntas educativas\n` +
    `🔥 *Recorde:* ${stats.bestStreak} acertos em sequência\n` +
    `✨ *Eixos Conquistados:* Vacinas, Higiene, 1º Socorros, Aleitamento, Sono Seguro e Desenvolvimento do Bebê!\n\n` +
    `Gire a roleta, teste seus conhecimentos e conquiste seu diploma também:`
  );
}

/**
 * Opens WhatsApp sharing link
 */
export function shareViaWhatsApp(playerName: string, stats: PlayerStats, url: string): void {
  const text = `${getShareMessage(playerName, stats)}\n${url}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Opens Facebook sharing dialog
 */
export function shareViaFacebook(url: string, quote?: string): void {
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}${
    quote ? `&quote=${encodeURIComponent(quote)}` : ''
  }`;
  window.open(fbUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Opens Twitter / X sharing dialog
 */
export function shareViaTwitter(playerName: string, stats: PlayerStats, url: string): void {
  const text = `🎓 Conquistei o Diploma no Gira Santa Mônica da Maternidade Escola Santa Mônica (UNCISAL)! ${stats.score} pts e todos os 6 eixos de saúde da gestante conquistados!`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Opens Telegram sharing link
 */
export function shareViaTelegram(playerName: string, stats: PlayerStats, url: string): void {
  const text = getShareMessage(playerName, stats);
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
}
