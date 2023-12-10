<script lang="ts">
  import { cubicIn, cubicOut } from "svelte/easing";
  import type { Character } from "./character";
  import { gsap } from 'gsap';
  export let character: Character;
  export let reverse = false;

  $: if (character.act) {
    const tl = gsap.timeline();
    tl.to('#'+character.id, {
        scale: 1.2,
        x: reverse ? 20 : -20,
        y: -20,
        duration: 0.5,
        ease: cubicIn
    });
    tl.to('#'+character.id, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: cubicOut
    });
  }
</script>

<div id={character.id} class:attacking={character.act} class:reverse class="bg-neutral rounded-md text-neutral-content character">
  <img class="portrait" src={'./battler/' + character.name + '.svg'} alt={character.name} />
  <span class="hp">hp: {character.health}</span>
  <span class="atk">atk: {character.attack}</span>
</div>

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