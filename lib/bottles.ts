export type SpiritType = 'Whisky' | 'Gin' | 'Rum' | 'Vodka' | 'Tequila' | 'Liqueur' | 'Cognac' | 'Brandy' | 'Other';

export interface Bottle {
  id: string;
  name: string;
  brand: string;
  type: SpiritType;
  origin: string;
  abv: number;
  volume: number;
  year?: number;
  description: string;
  imagePath: string;
}

export const SPIRIT_COLORS: Record<string, string> = {
  Whisky:  '#c8860a',
  Gin:     '#2a9d8f',
  Rum:     '#c1440e',
  Vodka:   '#9ca3af',
  Tequila: '#6b8c3a',
  Liqueur: '#7c3aed',
  Cognac:  '#b5651d',
  Brandy:  '#b5651d',
  Other:   '#64748b',
};

/** Rgba glow colours keyed by spirit type (for CSS custom property injection) */
export const SPIRIT_GLOWS: Record<string, string> = {
  Whisky:  'rgba(200, 134,  10, 0.38)',
  Gin:     'rgba( 42, 157, 143, 0.38)',
  Rum:     'rgba(193,  68,  14, 0.38)',
  Vodka:   'rgba(156, 163, 175, 0.32)',
  Tequila: 'rgba(107, 140,  58, 0.38)',
  Liqueur: 'rgba(124,  58, 237, 0.40)',
  Cognac:  'rgba(181, 101,  29, 0.38)',
  Brandy:  'rgba(181, 101,  29, 0.38)',
  Other:   'rgba(100, 116, 139, 0.32)',
};

/** Drop-shadow colours for the bottle image on hover */
export const SPIRIT_SHADOWS: Record<string, string> = {
  Whisky:  'rgba(200, 134,  10, 0.55)',
  Gin:     'rgba( 42, 157, 143, 0.55)',
  Rum:     'rgba(193,  68,  14, 0.55)',
  Vodka:   'rgba(156, 163, 175, 0.45)',
  Tequila: 'rgba(107, 140,  58, 0.55)',
  Liqueur: 'rgba(124,  58, 237, 0.60)',
  Cognac:  'rgba(181, 101,  29, 0.55)',
  Brandy:  'rgba(181, 101,  29, 0.55)',
  Other:   'rgba(100, 116, 139, 0.45)',
};

export const ORIGIN_FLAGS: Record<string, string> = {
  'Scotland':       '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'England':        '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Ireland':        '🇮🇪',
  'France':         '🇫🇷',
  'Italy':          '🇮🇹',
  'Spain':          '🇪🇸',
  'Mexico':         '🇲🇽',
  'Jamaica':        '🇯🇲',
  'Cuba':           '🇨🇺',
  'United States':  '🇺🇸',
  'Poland':         '🇵🇱',
  'Russia':         '🇷🇺',
  'Japan':          '🇯🇵',
  'Germany':        '🇩🇪',
};

export function getFlag(origin: string): string {
  return ORIGIN_FLAGS[origin] ?? '🌍';
}

import bottlesData from '../data/bottles.json';

export function getAllBottles(): Bottle[] {
  return bottlesData as Bottle[];
}

export function chunkBottles(bottles: Bottle[], perShelf: number = 4): Bottle[][] {
  const shelves: Bottle[][] = [];
  for (let i = 0; i < bottles.length; i += perShelf) {
    shelves.push(bottles.slice(i, i + perShelf));
  }
  return shelves;
}
