<script lang="ts">
  import type { Character } from '$lib/battler/character';
  import Characters from '$lib/battler/characters.svelte';
  import Store from '$lib/battler/store.svelte';

  let battling = false;
  let player1: Character[] = [
    { attack: 3, health: 8, name: 'dog', act: false, id: 'p1-1', level: 1 },
    { attack: 3, health: 6, name: 'bat', act: false, id: 'p1-2', level: 1 },
    { attack: 3, health: 8, name: 'dog', act: false, id: 'p1-3', level: 1 },
    { attack: 5, health: 15, name: 'elephant', act: false, id: 'p1-4', level: 1 },
  ];
  const template1 = [...player1];
  let player2: Character[] = [
    { attack: 3, health: 8, name: 'dog', act: false, id: 'p2-1', level: 1 },
    { attack: 5, health: 3, name: 'cat', act: false, id: 'p2-2', level: 1 },
    { attack: 2, health: 10, name: 'turtle', act: false, id: 'p2-3', level: 1 },
    { attack: 10, health: 7, name: 'manta', act: false, id: 'p2-4', level: 1 },
  ];
  const template2 = [...player2];

  function reset() {
    player1 = [...template1];
    player2 = [...template2];
  }

  // each player attacks the other
  function takeTurn() {
    player1 = attack(player1, player2);
    player2 = attack(player2, player1);

    // add this set timeout around end and cleanup
    setTimeout(() => {
      // you don't have endAction, we'll get to that later
      player1 = endAction(player1);
      player2 = endAction(player2);
      player1 = cleanup(player1);
      player2 = cleanup(player2);
    }, 1000);
  }

  // perform attacks from p1 to p2
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
    console.log(players);
    if (players.length > 0) {
      return players.filter((player) => player && player.health > 0);
    }
    battling = false;
    clearInterval(interval); // clears the game loop
    interval = undefined;
    return [];
  }

  let interval: number | undefined = 0;
  // starts the gameloop / interval
  function start() {
    if (!battling) {
      battling = true;
      reset();
      // this interval runs every 1.5 seconds
      interval = setInterval(() => {
        // this block of code runs every 1.5 seconds
        if (battling) {
          takeTurn();
        }
        // end block of code
      }, 1500); // 1.5 secs to attack each other
    }
  }
</script>

{#if battling}
  <div class="battler flex justify-between align-middle mt-24 mx-auto">
    <Characters characters={player1} reverse={true} />
    <Characters characters={player2} />
  </div>
{:else}
  <Store></Store>
{/if}

<div class="flex justify-around">
  <button class="btn btn-primary" on:click={start}>
    {#if battling}
      Battling!
    {:else}
      Start Battle!
    {/if}
  </button>
</div>

<style>
  .battler {
    height: 100%;
    max-width: 1200px;
  }
</style>
