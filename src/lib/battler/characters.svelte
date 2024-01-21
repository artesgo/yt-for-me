<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Char from './char.svelte';
  import type { Character } from './character';
  import { v4 } from 'uuid';

  export let characters: Character[] = [];
  export let reverse = false;
  export let store = false;
  export let sell = false;

  let dispatch = createEventDispatcher();

  function buy(character: Character) {
    // emit event from the buy
    // character.id = v4(); // this mutates the reference
    dispatch('buy', { ...character, id: v4() });
  }

  function sold(character: Character) {
    // emit event from the sell
    dispatch('sell', character);
  }
</script>

<div class="flex justify-end" class:reverse>
  <!-- we need to display the characters -->
  {#each characters as character}
    <Char {character} {reverse}></Char>
    {#if store}
      <button class="btn btn-primary" on:click={() => buy(character)}>
        Buy
      </button>
    {/if}
    {#if sell}
      <button class="btn btn-primary" on:click={() => sold(character)}>
        Sell
      </button>
    {/if}
  {/each}
</div>

<style>
  .reverse {
    flex-direction: row-reverse;
  }
</style>
