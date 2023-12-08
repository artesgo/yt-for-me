<script lang="ts">
    import '$lib/app.css';
    import Nav from "$lib/nav.svelte";
	import Sidenav from '$lib/sidenav.svelte';
    import { theme } from '$lib/theme';

    let clientWidth = 0;
    let showSideNav = false;
    $: isMobile = clientWidth < 768;
    $: show = isMobile || showSideNav;
</script>

<!-- top level page container -->
<!-- <div class="fixed min-h-screen -z-50 w-full"></div> -->
<div data-theme={$theme} bind:clientWidth={clientWidth} class="min-h-screen">
    <Nav on:hamburger={() => showSideNav = !showSideNav } />
    <Sidenav {show} />
    <main class="px-10 py-4" class:phantom={!isMobile && showSideNav}>
        <slot />
    </main>
    <!-- <Footer /> -->
</div>

<style>
    .phantom {
        margin-left: 300px;
    }
</style>