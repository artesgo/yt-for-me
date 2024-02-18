<script lang="ts">
  import Characters from '$lib/battler/characters.svelte';
  import Store from '$lib/battler/store.svelte';
  import type { Character } from '$lib/battler/character';
  import { getPlayer, player, enemy } from '$lib/battler/player';
  import { randomAnimal } from '$lib/battler/animals';

  let battling = false;
  // us our player store to keep track of this list
  // save player build to the database
  const player1 = getPlayer(player);
  // generate random attackers for the other list
  // use random player builds from the database
  const player2 = getPlayer(enemy);
  const playerExample: Character[] = [];
  playerExample.push(randomAnimal());

  player1.add(randomAnimal());
  player1.add(randomAnimal());
  player1.add(randomAnimal());

  player2.add(randomAnimal());
  player2.add(randomAnimal());
  player2.add(randomAnimal());

  // $: creates a reactive variable
  $: player1Alive = $player1.filter((char) => !char.dead);
  // this makes it so that your code is spread everywhere
  $: playerExampleAlive = playerExample.filter((char) => !char.dead);
  $: player2Alive = $player2.filter((char) => !char.dead);

  // auto subscribes to the store, all changes that happen on the store, you are notified
  // $player1

  // manual subscribe
  // player1.subscribe(change => {
  //   console.log(change);
  // });

  function reset() {
    player1.resetHealth();
    player2.resetHealth();
  }

  // each player attacks the other
  function takeTurn() {
    player1.attacked($player2);
    player2.attacked($player1);
    setTimeout(() => {
      // player1 wasn't a store / or a helper function that touched our store
      // player1 = endAction(player1)
      player1.cleanup();
      player2.cleanup();
      if (player1Alive.length === 0 || player2Alive.length === 0) {
        battling = false;
      }
    }, 1000);
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
        takeTurn();
        // end block of code
      }, 1500); // 1.5 secs to attack each other
    }
  }
</script>

{#if battling}
  <div class="battler flex justify-between align-middle mt-24 mx-auto">
    <Characters characters={player1Alive} reverse={true} />
    <Characters characters={player2Alive} />
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
