<script lang="ts">
    import type { Character } from "$lib/battler/character";
    import Characters from "$lib/battler/characters.svelte";

    let player1: Character[] = [
        { attack: 3, health: 8, name: 'dog' },
        { attack: 3, health: 8, name: 'dog' },
        { attack: 3, health: 8, name: 'dog' },
    ];
    let player2: Character[] = [
        { attack: 3, health: 8, name: 'dog' },
        { attack: 5, health: 3, name: 'cat' },
        { attack: 2, health: 10, name: 'turtle' },
    ];

    let turnTimer = 2;

    // each player attacks the other
    function takeTurn() {
        player1 = attack(player1, player2);
        player2 = attack(player2, player1);
        player1 = cleanup(player1);
        player2 = cleanup(player2);
    }

    // perform attacks from p1 to p2
    function attack(p1: Character[], p2: Character[]) {
        const [firstP1, ...otherP1] = p1;
        const [firstP2] = p2;

        // update p1 with the attack from p2
        firstP1.health -= firstP2.attack;

        // this is a quirk where we create a new array to update the data
        return [firstP1, ...otherP1];
    }

    // cleanup dead characters after turn
    function cleanup(players: Character[]) {
        return players.filter(player => player.health > 0);
    } 
</script>

<div class="flex justify-between">
    <Characters characters={player1} reverse={true} />
    <Characters characters={player2} />
</div>

<button on:click={takeTurn}>Take Turn</button>