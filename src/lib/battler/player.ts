import { writable } from 'svelte/store';
import type { Character } from './character';
import { v4 } from 'uuid';

let player = writable<Character[]>([]);
let enemy = writable<Character[]>([]);

export function getPlayer() {
  const { subscribe, set, update } = player;
  return {
    subscribe,
    add: (character: Character) => {
      update((list) => [...list, { ...character, id: v4() }]);
    },
    remove: (character: Character) => {
      update((list) => list.filter((existing) => existing.id !== character.id));
    },
    resetHealth: () => update(resetDamage),
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
    // regenerate: () => {},
    add: (character: Character) => {
      update((list) => [...list, { ...character, id: v4() }]);
    },
    // notice update gets a "list" parameter in the arrow function?
    remove: (character: Character) => {
      update((list) => list.filter((existing) => existing.id !== character.id));
    },
    // this parameter is passed implicitly to resetDamage without writing it all out
    resetHealth: () => update(resetDamage),
    // the above is the same as
    // resetHealth: () => update((list) => resetDamage(list)),
    attacked: (enemy: Character[]) => {
      update((list) => attack(list, enemy));
    },
    endAction: () => update(endAction),
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

// this is the callback function
function resetDamage(list: Character[]) {
  return list.map((character) => {
    character.damage = 0;
    return character;
  });
}

// cleanup dead characters after turn
export function cleanup(players: Character[]) {
  if (players.length > 0) {
    // convert to player health vs damage
    return players.filter((player) => player && player.health > player.damage);
  }
  // move the below back to the page.svelte
  // battling = false;
  // clearInterval(interval); // clears the game loop
  // interval = undefined;
  return [];
}
