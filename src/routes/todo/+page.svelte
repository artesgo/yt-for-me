<script lang="ts">
    import type { Todo } from "$lib/todo";
    import { Button, Checkbox, TextInput } from "carbon-components-svelte";
    import { onMount } from "svelte";
    import { v4 } from "uuid"; // <<<<<<

    let description: string;
    const _id = "applings-todo-keys";
    let todos: Todo[] = [];
    let keys: string[] = [];

    function saveItem() {
        // new TODOs
        const todo: Todo = {
            done: false,
            description: description,
            key: v4(), // <<<<<<
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
        // console.log(todo);
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

<div class="flex controls">
    <TextInput bind:value={description}>New TODO</TextInput>
    <Button size="field" on:click={() => saveItem()}>Create Todo</Button>
</div>

{#each todos as item}
    <div class="flex" class:done={item.done}>
        <Checkbox
            bind:checked={item.done}
            on:change={() => doneItem(item)}
            labelText={item.description}
        />
        <Button on:click={() => deleteItem(item.key)}>Delete</Button>
    </div>
{:else}
    You've completed all your tasks!
{/each}

<!-- find out how to make random colors -->

<style>
    /* the . is targetting a class in your html */
    .flex {
        display: flex;
        /* justify-content: flex-start; */
        /* centers things vertically */
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid;
    }

    /* .done {
        background-color: #3cf060;
    } */

    .controls {
        margin-bottom: 20px;
    }
</style>
