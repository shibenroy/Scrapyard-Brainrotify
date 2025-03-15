export interface Character {
  id: number;
  name: string;
  image: string;
  hp: number;
  maxHp: number;
  moves: Move[];
}

export interface Move {
  name: string;
  damage: number;
  type: 'physical' | 'special';
  animation: 'shake' | 'flash' | 'bounce' | 'spin';
}

export interface Player {
  number: 1 | 2;
  character: Character;
}

export type BattleState = 'selection' | 'battle' | 'finished';