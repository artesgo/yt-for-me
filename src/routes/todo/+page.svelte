<script lang="ts">
  import type { Todo } from '$lib/todo';
  import { onMount } from 'svelte';
  import { v4 } from 'uuid';

  let description: string;
  const _id = 'applings-todo-keys';
  let todos: Todo[] = [];
  let keys: string[] = [];

  function saveItem() {
    // new TODOs
    const todo: Todo = {
      done: false,
      description: description,
      key: v4(),
    };

    // spread operation
    todos = [...todos, todo];
    keys = [...keys, todo.key];

    // localStorage
    localStorage.setItem(_id, JSON.stringify(keys));
    localStorage.setItem(todo.key, JSON.stringify(todo));
  }

  onMount(() => {
    keys = JSON.parse(localStorage.getItem(_id) as string) || [];

    // maps are tranformation
    if (keys && keys.length) {
      todos = keys.map((key) => {
        return JSON.parse(localStorage.getItem(key) as string);
      });
    }
  });

  function doneItem(todo: Todo) {
    localStorage.setItem(todo.key, JSON.stringify(todo)); // from newItem(...);
  }

  function deleteItem(keyToDelete: string) {
    // use the key parameter to look inside our keys / todos array to remove item
    keys = keys.filter((_key) => {
      // filter loops through the keys array and each _key is then compared against our func param
      return keyToDelete !== _key;
    });

    todos = todos.filter((_todo) => {
      return keyToDelete !== _todo.key;
    });

    localStorage.removeItem(keyToDelete);
    localStorage.setItem(_id, JSON.stringify(keys));
  }
</script>

<div class="flex controls mb-10">
  <input class="input input-primary" type="text" bind:value={description} />
  <button class="btn btn-primary" on:click={() => saveItem()}
    >Create Todo</button
  >
</div>

{#each todos as todo}
  <div class="flex items-center justify-between mb-10 w-[400px]">
    <input
      type="checkbox"
      class="checkbox checkbox-primary text-neutral-content"
      bind:checked={todo.done}
      on:change={() => doneItem(todo)}
    />
    <div class="flex-grow px-4">{todo.description}</div>
    <button class="btn btn-primary" on:click={() => deleteItem(todo.key)}
      >Delete</button
    >
  </div>
{:else}
  You've completed all your tasks!
{/each}
