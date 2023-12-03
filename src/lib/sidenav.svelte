<script lang="ts">
    // creates a binding that let's outside 
    // components influence the state here
    export let show = true;
</script>

{#if show}
    <section class="border border-solid border-primary">
            <a href="/" class="link-primary side-nav-item">Gallery</a>
            <a href="/portfolio" class="link-primary side-nav-item">Portfolio</a>
            <a href="/todo" class="link-primary side-nav-item">TODO</a>
            <a href="/blog" class="link-primary side-nav-item">Blog</a>

            <a href="/battler" class="link-primary side-nav-item">Battler</a>

            <a href="/customization" class="link-primary side-nav-item">Customization</a>
        <!-- <a href="/tictactoe" class="side-nav-item">Tic Tac Toe</a> -->
    </section>
{/if}

<style>
    section {
        width: 300px;
        height: 100dvh;
        /* 100 device vertical height */
        position: fixed;
        padding-top: 128px;
        padding-left: 20px;
        padding-right: 8px;
        padding-bottom: 40px;
        z-index: 50;
        top: 0;
        overflow-y: scroll;
    }

    a {
        display: block;
    }
</style>