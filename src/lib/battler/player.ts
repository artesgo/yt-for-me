import { writable } from 'svelte/store';
import type { Character } from './character';

// player's list of pets
let player = writable<Character[]>([]);
let enemy = writable<Character[]>([]);

// next time, we start with this
export function getPlayer() {
  const { subscribe, set, update } = player;
  return {
    subscribe,
    add: (pet: Character) => {
      // "[...list]", means use the items of existing list to recreate a new list
      // "[...list, pet]" means we want to add a new item at the end
      // "[pet, ...list]" if we put pet first, it means we want to put the new item first
      update((list) => [...list, pet]);
    },
    remove: (pet: Character) => {
      // TODO: do some questions on filtering
      update((list) => list.filter((existing) => existing.id !== pet.id));
    },
    resetHealth: () => {
      // HOMEWORK:
      update((list) => list.map((pet) => pet /** what do you do here */));
    },
    attacked: (enemy: Character[]) => {
      update((list) => attack(list, enemy));
    },
    endAction: () => update((list) => endAction(list)),
  };
}

export function getEnemy() {
  const { subscribe, set, update } = enemy;
  return {
    subscribe,
    // TODO: regenerate enemy list
    regenerate: () => {},
    add: (pet: Character) => {
      // "[...list]", means use the items of existing list to recreate a new list
      // "[...list, pet]" means we want to add a new item at the end
      // "[pet, ...list]" if we put pet first, it means we want to put the new item first
      update((list) => [...list, pet]);
    },
    remove: (pet: Character) => {
      // TODO: do some questions on filtering
      update((list) => list.filter((existing) => existing.id !== pet.id));
    },
    resetHealth: () => {
      // HOMEWORK:
      update((list) => list.map((pet) => pet /** what do you do here */));
    },
    attacked: (enemy: Character[]) => {
      update((list) => attack(list, enemy));
    },
    endAction: () => update((list) => endAction(list)),
  };
}

function attack(p1: Character[], p2: Character[], index = 0) {
  const [firstP2] = p2;
  return p1.map((character, i) => {
    // does the index match the person being attacked
    if (i === index && firstP2) {
      // this is the transformation
      character.health -= firstP2.attack;
      character.act = true;
    }
    return character;
  });
}

function endAction(p1: Character[]) {
  return p1.map((character) => {
    character.act = false;
    return character;
  });
}

// cleanup dead characters after turn
function cleanup(players: Character[]) {
  // TODO: Get list of characters that are still alive
  if (players.length > 0) {
    return players.filter((player) => player && player.health > 0);
  }
  // move the below back to the page.svelte
  // battling = false;
  // clearInterval(interval); // clears the game loop
  // interval = undefined;
  return [];
}
