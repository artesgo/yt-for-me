<script lang="ts">
  import { getWallet } from "$lib/stores/wallet";
  import { onDestroy, onMount } from "svelte";
  import { randomizeAnimals } from "./animals";
  import type { Character } from "./character";
  import type { IConsumable } from "./consumable";
  import Characters from "./characters.svelte";

  const wallet = getWallet();
  let currentAnimals: Character[] = []

  function generateNewAnimals() {
    currentAnimals = randomizeAnimals(1);
  }

  // generate list of random items for purchase
  function randomizeItems() {}

  // buying and selling items / animals
  function buyAnimal(animal: Character) {}

  function buyItem(item: IConsumable) {}

  onMount(() => {
    console.log('mounted');
    generateNewAnimals();
  })

  onDestroy(() => {
    console.log('unMount');
  })
</script>

<!-- display the purchasable animals -->

<!-- display the purchasable buff items -->

<!-- display how much money is in your wallet -->

You Have ${$wallet}!

<Characters characters={currentAnimals}></Characters>