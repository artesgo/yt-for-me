<script lang="ts">
  import { getWallet } from '$lib/stores/wallet';
  import { getPlayer, player } from '$lib/battler/player';
  import { onMount } from 'svelte';
  import { randomizeAnimals } from './animals';
  import type { Character } from './character';
  import type { IConsumable } from './consumable';
  import Characters from './characters.svelte';
  import { randomizeItems } from './items';

  const wallet = getWallet();
  const playerStore = getPlayer(player);

  let currentAnimals: Character[] = [];
  let currentItems: IConsumable[] = [];
  let target: Character;

  function generateNewAnimals() {
    currentAnimals = randomizeAnimals(1);
  }

  // generate list of random items for purchase
  function generateItems() {
    currentItems = randomizeItems(); // the homework item
  }

  let hitLimit = false;
  // buying and selling items / animals
  function buyAnimal(animal: Character) {
    hitLimit = false;

    // this goes to the player
    if ($playerStore.length < 5) {
      playerStore.add(animal);
    } else {
      hitLimit = true;
    }
  }

  function sellAnimal(animal: Character) {
    // this goes to the player
    playerStore.remove(animal);
    hitLimit = false;
  }

  // TODO: pop up modal to select target
  function buyItem(item: IConsumable, target: Character) {
    // item upgrades an animal
  }

  function roll() {
    generateNewAnimals();
    generateItems();
  }

  onMount(() => {
    roll();
  });
</script>

You Have ${$wallet}!

{#if hitLimit}
  <div class="alert alert-warning">
    You've Hit the limit of how many characters you can own!
  </div>
{/if}

<Characters
  store
  characters={currentAnimals}
  on:buy={(event) => buyAnimal(event.detail)}
></Characters>

<!-- ideally, we create a component out of the each block here -->
{#each currentItems as item}
  <div>
    {item.name} - atk: {item.attack} - hp: {item.health}
  </div>

  <button on:click={() => buyItem(item, target)}>Buy</button>
{/each}

<button class="btn btn-primary" on:click={roll}>Re-roll</button>

<Characters
  sell
  characters={$playerStore}
  on:sell={(event) => sellAnimal(event.detail)}
></Characters>
