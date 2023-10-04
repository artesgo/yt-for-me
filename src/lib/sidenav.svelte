<script lang="ts">
    // creates a binding that let's outside 
    // components influence the state here
    export let show = true;
</script>

{#if show}
    <section class="bg-slate-900">
        SideNav that should hide on small screen
    </section>
{/if}

<style>
    section {
        width: 300px;
        height: 100dvh;
        /* 100 device vertical height */
        position: fixed;
        padding-top: 64px;
        padding-left: 8px;
        padding-right: 8px;
        z-index: 50;
        top: 0;
    }
</style>