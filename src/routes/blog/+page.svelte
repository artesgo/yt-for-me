<script lang="ts">
  import { user } from '$lib/stores/user';
  import { blog } from '$lib/stores/blog';
  import { onMount } from 'svelte';
  import type { Models } from 'appwrite';

  let title = '';
  let description = '';

  onMount(() => {
    blog.init();
  });

  function submit(event: KeyboardEvent, post: Models.Document) {
    console.log(event);
    if (event.code === 'Enter') {
      blog.update(post, (event.target as any)?.value);
    }
  }

  // TODO LIST
  // lookup how to do image storage
  // fix the login/registration scripts for this app
  // find out how to get different colour bgs via themes
</script>

{#if $user}
  {@const id = $user.$id}
  <section>
    <h2>Submit Idea</h2>
    <form>
      <input type="text" placeholder="Title" bind:value={title} />
      <textarea placeholder="Description" bind:value={description} />
      <button
        type="button"
        on:click={async () => {
          blog.add(id, title, description);
          title = '';
          description = '';
        }}>Submit</button
      >
    </form>
  </section>
{:else}
  <section><p>Please login to submit an idea.</p></section>
{/if}
<section>
  <h2>Latest Ideas</h2>
  <ul>
    {#each $blog as post}
      <li>
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            class="checkbox checkbox-primary mr-4"
            bind:checked={post.done}
            on:click={() => blog.check(post)}
          />
          <input
            type="text"
            class="input input-primary"
            value={post.title}
            on:keydown={(event) => submit(event, post)}
          />
        </div>
        <p>{post.description}</p>
        {#if $user && post.userId === $user.$id}
          <button type="button" on:click={() => blog.remove(post.$id)}
            >Remove</button
          >
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-bottom: 3rem;
  }
  form {
    display: grid;
    gap: 0.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border-radius: 0.25em;
    box-shadow: 8px 8px 4px 0 rgba(0, 0, 0, 0.1);
    min-width: 20%;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>
