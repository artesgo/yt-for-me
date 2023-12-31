<script lang="ts">
    import { getWallet } from "$lib/stores/wallet";
    import type { Character } from "./character";
    import type { IConsumable } from "./consumable";

    const wallet = getWallet();

    // generate list of random animals for purchase
    function randomizeAnimals() {

    }

    // generate list of random items for purchase
    function randomizeItems() {

    }

    // buying and selling items / animals
    function buyAnimal(animal: Character) {

    }

    function buyItem(item: IConsumable) {

    }
</script>

<!-- display the purchasable animals -->

<!-- display the purchasable buff items -->

<!-- display how much money is in your wallet -->

You Have ${ $wallet }!