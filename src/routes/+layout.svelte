<script lang="ts">
    import '../lib/app.css';
    import Nav from "$lib/nav.svelte";
	import Sidenav from '$lib/sidenav.svelte';

    let clientWidth = 0;
    let showSideNav = false;
    $: isMobile = clientWidth < 768;
    $: show = isMobile || showSideNav;
</script>
<!-- top level page container -->

<div bind:clientWidth={clientWidth} class="min-h-screen bg-slate-800 text-slate-100">
    <Nav on:hamburger={() => showSideNav = !showSideNav } />
    <section class="flex flex-nowrap">
        <Sidenav {show} {isMobile} />
        <main>
            <slot />
        </main>
    </section>
</div>