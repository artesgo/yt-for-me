import type { Character } from "./character";

export const ANIMALS: Character[] = [
  {
    name: "elephant",
    health: 20,
    attack: 5,
    level: 2,
  },
  {
    name: "dog",
    health: 8,
    attack: 3,
    level: 1,
  },
  {
    name: "cat",
    health: 5,
    attack: 2,
    level: 1,
  },
  {
    name: "turtle",
    health: 10,
    attack: 1,
    level: 1,
  },
  {
    name: "wolf",
    health: 10,
    attack: 4,
    level: 1,
  },
  {
    name: "manta",
    health: 10,
    attack: 8,
    level: 2,
  },
];

// generate list of random animals for purchase
// generate 5 random animals based on level
export function randomizeAnimals(level: number) {
    const onlyOfLevel = ANIMALS.filter(animal => {
        return animal.level <= level
    });

    // return 5 animals
    return randomFromList(onlyOfLevel);
}

/**
 * 
 * @param animalList filtered list of animals based on level
 * @returns a new list of random animals of that level
 */
function randomFromList(animalList: Character[]) {
    // create a new list of animals
    const randomAnimals: Character[] = [];

    for (let i = 0; i < 5; i++) {
        // example: 1.89 Math.floor will turn that into 1
        const randomAnimalIndex = Math.floor(Math.random() * animalList.length);
        randomAnimals.push(animalList[randomAnimalIndex]);
    }

    return randomAnimals;
}