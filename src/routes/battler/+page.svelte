<script lang="ts">
  import type { Character } from '$lib/battler/character';
  import Characters from '$lib/battler/characters.svelte';
  import Store from '$lib/battler/store.svelte';
  import { getPlayer, getEnemy } from '$lib/battler/player';

  let battling = false;
  // us our player store to keep track of this list
  // save player build to the database
  let player1 = getPlayer();
  // generate random attackers for the other list
  // use random player builds from the database
  let player2 = getEnemy();

  function reset() {
    player1.resetHealth();
    player2.resetHealth();
  }

  // each player attacks the other
  function takeTurn() {
    // player1 = attack(player1, player2);
    player1.attacked($player2);
    // player2 = attack(player2, player1);
    player2.attacked($player1);
    // add this set timeout around end and cleanup
    setTimeout(() => {
      // you don't have endAction, we'll get to that later
      // player1 = endAction(player1);
      // player2 = endAction(player2);
      // player1 = cleanup(player1);
      // player2 = cleanup(player2);
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
    <Characters characters={$player1} reverse={true} />
    <Characters characters={$player2} />
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
