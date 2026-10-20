import { ThemeId, ThemeMeta } from '../types/game';

export const THEMES: Record<ThemeId, ThemeMeta> = {
  vacinas: {
    id: 'vacinas',
    number: 1,
    name: 'Vacinas',
    shortName: 'Vacinas',
    mentor: 'Clarysse',
    color: '#1E88E5', // vibrant medical blue
    textColor: '#FFFFFF',
    accentBg: 'bg-blue-500',
    badgeTitle: 'Guardiã da Imunização',
    badgeSymbol: '💉',
    iconName: 'Syringe',
    description: 'Vacinas do recém-nascido (BCG, Hepatite B), imunizações da gestante e calendário do Programa Nacional de Imunizações (SUS).'
  },
  higiene: {
    id: 'higiene',
    number: 2,
    name: 'Higiene do Bebê',
    shortName: 'Higiene',
    mentor: 'Carynne',
    color: '#43A047', // fresh clean green
    textColor: '#FFFFFF',
    accentBg: 'bg-green-600',
    badgeTitle: 'Mestre dos Cuidados',
    badgeSymbol: '🛁',
    iconName: 'Bath',
    description: 'Cuidados com o coto umbilical, troca segura de fraldas para meninas e meninos, técnica do banho enroladinho e lavagem das roupas.'
  },
  primeiros_socorros: {
    id: 'primeiros_socorros',
    number: 3,
    name: 'Primeiros Socorros',
    shortName: '1º Socorros',
    mentor: 'Yasmim',
    color: '#FBC02D', // golden emergency yellow
    textColor: '#1E293B',
    accentBg: 'bg-amber-400',
    badgeTitle: 'Protetora Ágil',
    badgeSymbol: '🩹',
    iconName: 'HeartPulse',
    description: 'Manobra de desengasgo em lactentes, condutas em febre e convulsão febril, quedas, queimaduras e quando acionar o SAMU 192.'
  },
  aleitamento: {
    id: 'aleitamento',
    number: 4,
    name: 'Aleitamento & Introdução Alimentar',
    shortName: 'Aleitamento / Alimentação',
    mentor: 'João',
    color: '#FB8C00', // warm nutrition orange
    textColor: '#FFFFFF',
    accentBg: 'bg-orange-500',
    badgeTitle: 'Nutriz Especialista',
    badgeSymbol: '🍼',
    iconName: 'Baby',
    description: 'Aleitamento exclusivo até os 6 meses, pega correta, banco de leite da MESM, conservação do leite ordenhado e guia alimentar dos 6 meses aos 2 anos.'
  },
  sono_prevencao: {
    id: 'sono_prevencao',
    number: 5,
    name: 'Sono Seguro e Prevenção de Acidentes',
    shortName: 'Sono & Prevenção',
    mentor: 'Ana Lucia',
    color: '#E53935', // safety red
    textColor: '#FFFFFF',
    accentBg: 'bg-red-500',
    badgeTitle: 'Vigilante do Lar Seguro',
    badgeSymbol: '🌙',
    iconName: 'ShieldAlert',
    description: 'Ambiente seguro no berço para evitar sufocamento, posição de dormir de barriga para cima, segurança com líquidos quentes, tomadas, redes de proteção e pisos.'
  },
  marcos_desenvolvimento: {
    id: 'marcos_desenvolvimento',
    number: 6,
    name: 'Marco do Desenvolvimento',
    shortName: 'Desenvolvimento',
    mentor: 'Thalyta',
    color: '#E91E63', // loving pink/magenta
    textColor: '#FFFFFF',
    accentBg: 'bg-pink-500',
    badgeTitle: 'Exploradora do Crescimento',
    badgeSymbol: '🧸',
    iconName: 'Sparkles',
    description: 'Acompanhamento do neurodesenvolvimento: sorriso social, sustentação da cabeça, rolar, sentar, balbucio, movimento de pinça e vínculo afetivo.'
  }
};

export interface WheelSlice {
  id: ThemeId | 'crown';
  number?: number;
  label: string;
  lines: string[];
  mentor?: string;
  color: string;
  textColor: string;
  icon: string;
}

// Exactly ordered as displayed on the user's wheel image
export const WHEEL_SLICES: WheelSlice[] = [
  {
    id: 'crown',
    label: 'Escolha o Tema!',
    lines: ['Escolha', 'o Tema!'],
    color: '#7E57C2', // royal purple
    textColor: '#FFFFFF',
    icon: '👑'
  },
  {
    id: 'vacinas',
    number: 1,
    label: 'Vacinas',
    lines: ['Vacinas'],
    mentor: 'Clarysse',
    color: '#1E88E5', // Sector 1 Blue
    textColor: '#FFFFFF',
    icon: '💉'
  },
  {
    id: 'higiene',
    number: 2,
    label: 'Higiene do Bebê',
    lines: ['Higiene', 'do Bebê'],
    mentor: 'Carynne',
    color: '#43A047', // Sector 2 Green
    textColor: '#FFFFFF',
    icon: '🛁'
  },
  {
    id: 'primeiros_socorros',
    number: 3,
    label: 'Primeiros Socorros',
    lines: ['Primeiros', 'Socorros'],
    mentor: 'Yasmim',
    color: '#FBC02D', // Sector 3 Yellow
    textColor: '#1E293B',
    icon: '🩹'
  },
  {
    id: 'aleitamento',
    number: 4,
    label: 'Aleitamento / Alimentação',
    lines: ['Aleitamento', '& Nutrição'],
    mentor: 'João',
    color: '#FB8C00', // Sector 4 Orange
    textColor: '#FFFFFF',
    icon: '🍼'
  },
  {
    id: 'sono_prevencao',
    number: 5,
    label: 'Sono Seguro e Prevenção',
    lines: ['Sono Seguro', '& Prevenção'],
    mentor: 'Ana Lucia',
    color: '#E53935', // Sector 5 Red
    textColor: '#FFFFFF',
    icon: '🌙'
  },
  {
    id: 'marcos_desenvolvimento',
    number: 6,
    label: 'Marcos do Desenvolvimento',
    lines: ['Marcos do', 'Desenvolvimento'],
    mentor: 'Thalyta',
    color: '#E91E63', // Sector 6 Pink
    textColor: '#FFFFFF',
    icon: '🧸'
  }
];
