<script lang="ts">
  import { getWallet } from '$lib/stores/wallet';
  import { onMount } from 'svelte';
  import { randomizeAnimals } from './animals';
  import type { Character } from './character';
  import type { IConsumable } from './consumable';
  import Characters from './characters.svelte';
  import { randomizeItems } from './items';

  const wallet = getWallet();
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

  // buying and selling items / animals
  function buyAnimal(animal: Character) {
    // this goes to the player
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

<!-- display the purchasable animals -->
<!-- display the purchasable buff items -->
<!-- display how much money is in your wallet -->
You Have ${$wallet}!

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
