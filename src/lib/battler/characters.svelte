<script lang="ts">
    import Char from "./char.svelte";
    import type { Character } from "./character";

    export let characters: Character[] = [];
    export let reverse = false;
</script>

<div class="flex justify-end" class:reverse={reverse}>
    <!-- we need to display the characters -->
    {#each characters as character}
        <Char {character} {reverse}></Char>
    {/each}
</div>

<style>
    .reverse {
        flex-direction: row-reverse;
    }
</style>