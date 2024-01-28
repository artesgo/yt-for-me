import type { Character } from './character';

export const ANIMALS: Character[] = [
  { name: 'bat familiar', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'blueb', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'crow', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'dragon', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'furbat', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'gryphon', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'imp', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'maiden', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'ogre', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'orb weaver', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'skelly archer', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'skelly daggers', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'skelly mage', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'skelly sword', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'snek', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'steel golem', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'stone golem', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'treant', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'troll', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'unknown', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'venus muncher', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'wisp', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'wolfren', health: 20, damage: 0, attack: 5, level: 2 },
  { name: 'crabboid', health: 20, damage: 0, attack: 5, level: 2 },
];

// generate list of random animals for purchase
// generate 5 random animals based on level
export function randomizeAnimals(level: number) {
  const onlyOfLevel = ANIMALS.filter((animal) => {
    return animal.level <= level;
  });

  // return 5 animals
  return randomFromList(onlyOfLevel);
}

/**
 *
 * @param animalList filtered list of animals based on level
 * @returns a new list of random animals of that level
 */
export function randomFromList(animalList: Character[]) {
  // create a new list of animals
  const randomAnimals: Character[] = [];

  for (let i = 0; i < 5; i++) {
    // example: 1.89 Math.floor will turn that into 1
    const randomAnimalIndex = Math.floor(Math.random() * animalList.length);
    randomAnimals.push(animalList[randomAnimalIndex]);
  }

  return randomAnimals;
}

export function randomAnimal() {
  const randomAnimalIndex = Math.floor(Math.random() * ANIMALS.length);
  return ANIMALS[randomAnimalIndex];
}
