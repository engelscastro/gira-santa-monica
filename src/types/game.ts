export type ThemeId = 
  | 'vacinas'
  | 'higiene'
  | 'primeiros_socorros'
  | 'aleitamento'
  | 'sono_prevencao'
  | 'marcos_desenvolvimento';

export interface ThemeMeta {
  id: ThemeId;
  number: number;
  name: string;
  shortName: string;
  mentor: string;
  color: string;
  textColor: string;
  accentBg: string;
  badgeTitle: string;
  badgeSymbol: string;
  iconName: string;
  description: string;
}

export interface Question {
  id: string;
  themeId: ThemeId;
  topic?: string;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  justification: string;
  wrongJustifications?: {
    [key in 'A' | 'B' | 'C' | 'D']?: string;
  };
  egoState?: string;
  senses?: string;
  reference?: string;
}

export type PowerType = 'ROW_BLAST' | 'BOMB_SQUARE' | 'CROSS_BLAST';

export interface PowerInventory {
  rowBlast: number;   // Destruir linha inteira (Laser Horizontal)
  bombSquare: number; // Explodir quadrado 3x3 (Bomba de Área)
  crossBlast: number; // Destruir linha e coluna em cruz (Super Raio)
}

export interface PlayerStats {
  score: number;
  totalAnswered: number;
  correctAnswers: number;
  streak: number;
  bestStreak: number;
  crownMeter: number; // 0 to 3
  badges: Record<ThemeId, boolean>;
  powers: PowerInventory;
  powersVersion?: number;
}

export type GameScreen = 
  | 'WHEEL'
  | 'QUESTION'
  | 'SELECT_THEME'
  | 'STUDY_GUIDE'
  | 'VICTORY'
  | 'ABOUT_MESM';
