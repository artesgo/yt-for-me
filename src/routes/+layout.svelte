<script lang="ts">
    import '$lib/app.css';
    import Nav from "$lib/nav.svelte";
	import Sidenav from '$lib/sidenav.svelte';
    import { theme } from '$lib/theme';

    let clientWidth = 0;
    let showSideNav = false;
    $: mobile = clientWidth < 768;
    $: show = showSideNav;
</script>

<!-- top level page container -->
<div data-theme={$theme} bind:clientWidth={clientWidth} class="min-h-screen">
    <Nav on:hamburger={() => showSideNav = !showSideNav } />
    <Sidenav {show} {mobile} />
    <main class="px-10 py-4 mx-auto" class:phantom={!mobile && showSideNav}>
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