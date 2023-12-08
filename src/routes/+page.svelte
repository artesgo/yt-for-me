<script lang="ts">
  import { storage } from "$lib/appwrite";
  import Thumb from "$lib/thumb.svelte";
  import { onMount } from "svelte";
  let loading = true;
  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 5000);
  });

  let urls: string[] = [];

  async function download() {
    // list all the files from the bucket
    let files = await storage.listFiles("65388a1ddd6fba947dc2");
    // transform the list into image url (src)
    urls = files.files.map((file) => {
      const view = storage.getFileView(file.bucketId, file.$id);
      return view.href;
    });
  }
</script>

<button class="btn btn-primary" on:click={download}>download file</button>
<div class="flex subscriptions justify-between px-8 flex-wrap">
  {#each urls as src}
    <img {src} alt="" />
  {/each}
  <!-- each of these thumbnails need to come from database, images to be stored on db -->
  <Thumb
    title="Man and dog"
    thumbnail="./man-and-dog.jpeg"
    avatar="./bell-solid.svg"
    creator="Johny bigg apples"
    views="5"
    id={1}
    {loading}
  />
  <Thumb
    title="Serine Exploration"
    thumbnail="./forest-ravine.jpeg"
    avatar="./bell-solid.svg"
    creator="Exploration+"
    views="51"
    id={2}
    {loading}
  />
  <Thumb
    title="Mountain Exploration+"
    thumbnail="./mountain-view.jpeg"
    avatar="./bell-solid.svg"
    creator="Exploration+"
    views="59"
    id={3}
    {loading}
  />
  <Thumb
    title="Starry Night"
    thumbnail="./starry-night.jpeg"
    avatar="./bell-solid.svg"
    creator="Relazation+"
    views="59"
    id={4}
    {loading}
  />

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
    margin: 0 auto;
  }
</style>
