<script lang="ts">
    import { theme } from '$lib/theme';
    let themes = ["light", "dark", "cupcake", "forest", "coffee"];
</script>

<label for="theme" class="sr-only">Theme</label>
<select class="select select-primary bg-primary text-primary-content" 
    id="theme"
    bind:value={$theme}
>
    {#each themes as theme}
        <option value={theme}>{theme}</option>
    {/each}
</select>