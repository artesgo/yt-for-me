export interface Character {
  attack: number;
  health: number;
  damage: number;
  name: string;
  level: number;

  act?: boolean; // trigger animations
  id?: string; // target elements for animation
}
