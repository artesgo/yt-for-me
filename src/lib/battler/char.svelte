<script lang="ts">
  import { cubicIn, cubicOut } from 'svelte/easing';
  import type { Character } from './character';
  import { gsap } from 'gsap';

  export let character: Character;
  export let reverse = false;

  // $: if (character && character.act) {
  //   const tl = gsap.timeline();

  //   tl.to('#' + character.id, {
  //     scale: 1.2,
  //     x: reverse ? 20 : -20,
  //     y: -20,
  //     duration: 0.5,
  //     ease: cubicIn,
  //   });

  //   tl.to('#' + character.id, {
  //     scale: 1,
  //     x: 0,
  //     y: 0,
  //     duration: 0.5,
  //     ease: cubicOut,
  //   });
  // }
</script>

{#if character}
  <div
    id={character.id}
    class:attacking={character.act}
    class:reverse
    class="bg-neutral rounded-md text-neutral-content character"
  >
    {character.id}
    <img
      class="portrait"
      src={'./battler/' + character.name + '.png'}
      alt={character.name}
    />
    <span class="hp">hp: {character.health - character.damage}</span>
    <span class="atk">atk: {character.attack}</span>
  </div>
{/if}

<style>
  .character {
    position: relative;
    width: 128px;
    height: 128px;
    margin: 4px;
    /* add these to center our portrait */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 128px;
    height: 128px;
  }

  .reverse .portrait {
    transform: scaleX(-1);
  }

  .hp {
    position: absolute;
    top: 0;
    right: 0;
  }

  .atk {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
