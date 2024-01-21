export interface Character {
  attack: number;
  health: number;
  damage: number;
  name: string;
  level: number;

  act?: boolean; // trigger animations
  id?: string; // target elements for animation
}

// export const animals: {
//   [animal: string]: Character;
// } = {
//   elephant: {
//     name: 'elephant',
//     health: 20,
//     damage: 0,
//     attack: 5,
//     level: 1,
//   },
//   dog: {
//     name: 'dog',
//     health: 8,
//     damage: 0,
//     attack: 3,
//     level: 1,
//   },
//   cat: {
//     name: 'cat',
//     health: 5,
//     damage: 0,
//     attack: 2,
//     level: 1,
//   },
//   turtle: {
//     name: 'turtle',
//     health: 10,
//     damage: 0,
//     attack: 1,
//     level: 1,
//   },
//   wolf: {
//     name: 'wolf',
//     health: 10,
//     damage: 0,
//     attack: 4,
//     level: 1,
//   },
//   manta: {
//     name: 'manta',
//     health: 10,
//     damage: 0,
//     attack: 8,
//     level: 1,
//   },
// };
