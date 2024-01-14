<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Char from './char.svelte';
  import type { Character } from './character';

  export let characters: Character[] = [];
  export let reverse = false;
  export let store = false;

  let dispatch = createEventDispatcher();

  function buy(character: Character) {
    // emit event from the buy
    dispatch('buy', character);
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
  {/each}
</div>

<style>
  .reverse {
    flex-direction: row-reverse;
  }
</style>
