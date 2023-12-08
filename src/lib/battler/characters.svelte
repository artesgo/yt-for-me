<script lang="ts">
    import type { Character } from "./character";

    export let characters: Character[] = [];
    export let reverse = false;
</script>

<div class="flex justify-end" class:reverse={reverse}>
    <!-- we need to display the characters -->
    {#each characters as character}
        <div class="bg-neutral rounded-md text-neutral-content character">
            <span class="portrait">{character.name}</span>
            <span class="hp">hp: {character.health}</span>
            <span class="atk">atk: {character.attack}</span>
        </div>
    {/each}
</div>

<style>
    .character {
        position: relative;
        width: 128px;
        height: 128px;
        margin: 4px;
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

    .reverse {
        flex-direction: row-reverse;
    }
</style>