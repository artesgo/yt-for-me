<script lang="ts">
    // creates a binding that let's outside 
    // components influence the state here
    export let show = true;
</script>

{#if show}
    <section class="bg-slate-900">
        <a href="/" class="side-nav-item">Gallery</a>
        <a href="/portfolio" class="side-nav-item">Portfolio</a>
        <a href="/todo" class="side-nav-item">TODO</a>
        <a href="/blog" class="side-nav-item">Blog</a>
        <a href="/tictactoe" class="side-nav-item">Tic Tac Toe</a>
    </section>
{/if}

<style>
    section {
        width: 300px;
        height: 100dvh;
        /* 100 device vertical height */
        position: fixed;
        padding-top: 128px;
        padding-left: 8px;
        padding-right: 8px;
        z-index: 50;
        top: 0;
    }
    a {
        display: block;
    }
</style>