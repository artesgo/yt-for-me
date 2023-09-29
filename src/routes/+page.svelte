<script>
	import Thumb from "$lib/thumb.svelte";
  import { onMount } from "svelte";
  let loading = true;

  onMount(() => {
    setTimeout(() => {
      // where the code runs for the timeout
      loading = false;
      console.log('first');
    }, 5000);
  })
</script>

<h1>Welcome To Svelte Kit</h1>

<div class="flex subscriptions justify-between px-8 flex-wrap">
  <Thumb
    title="Man and dog"
    thumbnail="./man-and-dog.jpeg"
    avatar="./bell-solid.svg"
    creator="Johny bigg apples"
    views="5"
    loading={loading}
  />
  <Thumb
    title="Serine Exploration"
    thumbnail="./forest-ravine.jpeg"
    avatar="./bell-solid.svg"
    creator="Exploration+"
    views="51"
    loading={loading} />
  <Thumb
    title="Mountain Exploration+"
    thumbnail="./mountain-view.jpeg"
    avatar="./bell-solid.svg"
    creator="Exploration+"
    views="59"
    loading={loading} />
  <Thumb
    title="Starry Night"
    thumbnail="./starry-night.jpeg"
    avatar="./bell-solid.svg"
    creator="Relazation+"
    views="59"
    loading={loading} />

  <Thumb />
  <Thumb />
  <Thumb />
  <Thumb />
  <Thumb />
  <Thumb />
  <Thumb />
  <Thumb />
</div>

<style>
  .flex {
    padding-bottom: 4rem;
    max-width: 1600px;
  }
</style>