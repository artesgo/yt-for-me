import type { IConsumable } from './consumable';

export const ITEMS: IConsumable[] = [
  {
    name: 'apple',
    health: 20,
    attack: 5,
  },
  {
    name: 'pear',
    health: 8,
    attack: 3,
  },
  {
    name: 'banana',
    health: 5,
    attack: 2,
  },
  {
    name: 'coffee',
    health: 5,
    attack: 2,
  },
  {
    name: 'sugar cane',
    health: 5,
    attack: 2,
  },
];

// function to generate list of 2 random items
export function randomizeItems() {
  // might want to bring back filtering later on

  return randomFromList(ITEMS, 2);
}

/**
 *
 * @param itemList filtered list of animals based on level
 * @param amount the number of items to return
 * @returns a new list of random animals of that level
 */
function randomFromList(itemList: IConsumable[], amount: number) {
  // create a new list of animals
  const randomItems: IConsumable[] = [];

  // we start at 0
  for (let i = 0; i < amount; i++) {
    // start of the loop

    // example: 1.89 Math.floor will turn that into 1
    const randomItemIndex = Math.floor(Math.random() * itemList.length);
    randomItems.push(itemList[randomItemIndex]);

    // end of the loop // i++ increments by 1, so next loop it'll be 1
  }

  return randomItems;
}
