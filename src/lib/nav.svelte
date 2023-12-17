<script lang="ts">
	import { createEventDispatcher } from "svelte";
    import { user } from './stores/user';
    import Theme from "./theme.svelte";
    export let mobile = false;
    // notify the parent component of an event
    let dispatch = createEventDispatcher();
</script>
<nav class="bg-neutral h-16">
    <section class="yt-fixed flex items-center">
        <button class="icon-button m-4" on:click={() => dispatch('hamburger')}>
            <img width="24px" src="./bars-solid.svg" alt="Menu">
        </button>
        {#if !mobile}
            <Theme></Theme>
        {/if}
    </section>

    <section class="yt-fill flex items-center">
        <div>
            <label class="sr-only" for="search">Search</label>
            <input class="bg-blend-multiply pl-4 pr-4 rounded-full" id="search" type="text" placeholder="Search" />
        </div>
        <button class="icon-button m-4">
            <img width="24px" src="./magnifying-glass-solid.svg" alt="search" />
        </button>
    </section>

    <section class="flex items-center">
        <div class="notification icon-button m-4">
            <img width="24px" src="./bell-solid.svg" alt="Notifications">
        </div>
        <div class="profile icon-button m-4 border-2 border-accent hover:border-primary">
            <img width="24px" src="./starry-night.jpeg" alt="Notifications">
            <!-- <a href="/login">{$user ? $user.name : 'Login'}</a> -->
        </div>
    </section>
</nav>

<style>
    nav {
        display: flex;
        position: relative;
        z-index: 51;
        box-shadow: 10px 10px 100px black;
    }
    .yt-fixed {
        width: 250px;
    }
    .yt-fill {
        flex-grow: 1;
    }

    .icon-button,
    .icon-button img {
        width: 24px;
        height: 24px;
    }

    .profile,
    .profile img {
        border-radius: 9000px;
    }
    .profile img {
        width: 20px;
        height: 20px;
    }
</style>