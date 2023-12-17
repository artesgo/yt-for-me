<script lang="ts">
    import '$lib/app.css';
    import Nav from "$lib/nav.svelte";
	import Sidenav from '$lib/sidenav.svelte';
    import { theme } from '$lib/theme';

    let clientWidth = 0;
    $: mobile = clientWidth < 768;
    let show = false;
</script>

<!-- top level page container -->
<div data-theme={$theme} bind:clientWidth={clientWidth} class="min-h-screen">
    <Nav {mobile} on:hamburger={() => show = !show } />
    <Sidenav bind:show={show} {mobile} />
    <main class="px-10 py-4 mx-auto" class:phantom={!mobile && show}>
        <slot />
    </main>
    <!-- <Footer /> -->
</div>

<style>
    .phantom {
        margin-left: 300px;
    }

    main {
        min-height: calc(100dvh - 64px);
    }
</style>