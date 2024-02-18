import { writable, type Writable } from 'svelte/store';
import type { Character } from './character';
import { v4 } from 'uuid';

// DRY - don't repeat yourself
// if you're copying and pasting code

// the stores
export let player = writable<Character[]>([]);
export let enemy = writable<Character[]>([]);

// the helper function exposes a way of changing our data in a uniform way
// from anywhere, this makes it so that you don't have to repeat logic
export function getPlayer(store: Writable<Character[]>) {
  const { subscribe, update } = store;

  return {
    subscribe, // allows the $ syntax to be used by the helper
    add: (character: Character) => {
      update((list) => [...list, { ...character, id: 'id-' + v4() }]);
    },
    remove: (character: Character) => {
      update((list) => list.filter((existing) => existing.id !== character.id));
    },
    resetHealth: () => update(resetDamage),
    attacked: (enemy: Character[]) => {
      update((list) => attack(list, enemy));
    },
    cleanup: () => update(cleanup),
  };
}

function attack(p1: Character[], p2: Character[]) {
  // find retrieves the first item that matches
  const player1 = p1.find((char) => !char.dead);
  const player2 = p2.find((char) => !char.dead);

  return p1.map((character) => {
    // does the id* match the person being attacked
    if (player1 && player2 && player1.id === character.id) {
      // changing the damage tracking to another variable so that it can be easily reset
      // we don't have to track the initial health if we just track damage instead
      character.damage += player2.attack;
      character.act = true;
    }
    return character;
  });
}

// this is the callback function
function resetDamage(list: Character[]) {
  return list.map((character) => {
    character.damage = 0;
    return character;
  });
}

// cleanup dead characters after turn
function cleanup(players: Character[]) {
  return players.map((player) => {
    if (player.damage >= player.health) {
      player.dead = true;
    }
    player.act = false;
    return player;
  });
}
