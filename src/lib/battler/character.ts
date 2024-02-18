export interface Character {
  attack: number;
  health: number;
  damage: number;
  name: string;
  level: number;

  dead?: boolean; // controls which chars are still in the battle
  act?: boolean; // trigger animations
  id?: string; // target elements for animation
}
