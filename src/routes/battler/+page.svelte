<script lang="ts">
    import type { Character } from "$lib/battler/character";
    import Characters from "$lib/battler/characters.svelte";

    let player1: Character[] = [
        { attack: 3, health: 8, name: "dog", act: false, id: "p1-1" },
        { attack: 3, health: 6, name: "bat", act: false, id: "p1-2" },
        { attack: 3, health: 8, name: "dog", act: false, id: "p1-3" },
        { attack: 5, health: 15, name: "elephant", act: false, id: "p1-4" },
    ];
    const template1 = [...player1];
    let player2: Character[] = [
        { attack: 3, health: 8, name: "dog", act: false, id: "p2-1" },
        { attack: 5, health: 3, name: "cat", act: false, id: "p2-2" },
        { attack: 2, health: 10, name: "turtle", act: false, id: "p2-3" },
        { attack: 10, health: 7, name: "manta", act: false, id: "p2-4" },
    ];
    const template2 = [...player2];

    let gameover = false;

    function reset() {
        player1 = [...template1];
        player2 = [...template2];
    }

    // each player attacks the other
    function takeTurn() {
        player1 = attack(player1, player2);
        player2 = attack(player2, player1);

        // add this set timeout around end and cleanup
        setTimeout(() => {
            // you don't have endAction, we'll get to that later
            player1 = endAction(player1);
            player2 = endAction(player2);
            player1 = cleanup(player1);
            player2 = cleanup(player2);
        }, 1000);
    }

    // perform attacks from p1 to p2
    function attack(p1: Character[], p2: Character[]) {
        const [firstP1, ...otherP1] = p1;
        const [firstP2] = p2;

        // for safety, we check if there are still characters left to battle
        if (firstP1 && firstP2) {
            // update p1 with the attack from p2
            firstP1.health -= firstP2.attack;
            firstP1.act = true;
            return [{...firstP1}, ...otherP1];
        }
        // this is a quirk where we create a new array to update the data
        return p1;
    }

    function endAction(p1: Character[]) {
        const [firstP1, ...otherP1] = p1;
        if (firstP1) {
            firstP1.act = false;
            return [{...firstP1}, ...otherP1];
        }
        return p1;
    }

    // cleanup dead characters after turn
    function cleanup(players: Character[]) {
        if (players.length > 0) {
            return players.filter((player) => player && player.health > 0);
        }
        gameover = true;
        clearInterval(interval);
        interval = undefined;
        return [];
    }

    let interval: number | undefined = 0;
    // gameloop
    function start() {
        gameover = false;
        reset();
        interval = setInterval(() => {
            if (!gameover) {
                takeTurn();
            }
        }, 1500); // 1.5 secs to attack each other
    }
</script>

<div class="battler flex justify-between align-middle mt-24 mx-auto">
    <Characters characters={player1} reverse={true} />
    <Characters characters={player2} />
</div>
<div class="flex justify-around">
    <button class="btn btn-primary" on:click={start}>
        {#if gameover}
            Start Battle!
        {:else}
            Battling
        {/if}
    </button>
</div>

<style>
    .battler {
        height: 100%;
        max-width: 1200px;
    }
</style>