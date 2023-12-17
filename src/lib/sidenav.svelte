<script lang="ts">
  // creates a binding that let's outside
  // components influence the state here
  export let show = true;
  export let mobile = false;
</script>

{#if show}
  <section class="border border-solid border-primary bg-neutral text-neutral-content" class:mobile>
    <a href="/" class="link hover:link-accent side-nav-item">Gallery</a>
    <a href="/todo" class="link hover:link-accent side-nav-item">Todo</a>
    <a href="/blog" class="link hover:link-accent side-nav-item">Blog</a>
    <a href="/battler" class="link hover:link-accent side-nav-item">Battler</a>
    <a href="/portfolio" class="link hover:link-accent side-nav-item">Portfolio</a>
    <a href="/customization" class="link hover:link-accent side-nav-item">Customization</a>
  </section>
{/if}

<style>
  section {
    width: 300px;
    height: 100dvh;
    /* 100 device vertical height */
    position: fixed;
    overflow-y: scroll;
    padding-top: 128px;
    padding-left: 20px;
    padding-right: 8px;
    padding-bottom: 40px;
    z-index: 50;
    top: 0;
  }

  section.mobile {
    width: 100%;
  }

  a {
    display: block;
  }
</style>