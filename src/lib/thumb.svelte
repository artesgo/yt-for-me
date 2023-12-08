<script lang="ts">
    import gsap from "gsap";
    export let thumbnail = "";
    export let title = "";
    export let creator = "";
    export let views = "";
    export let avatar = "";
    export let loading = true;
    export let id = 0;
    export let href = "/";

    function hover() {
        setTimeout(() => {
            gsap.to(".thumbnail-" + id, {
                scale: 1.2,
                duration: 0.5,
            });
        });
    }

    function out() {
        setTimeout(() => {
            gsap.to(".thumbnail-" + id, {
                scale: 1,
                duration: 0.5,
            });
        });
    }

    $: classes = "thumbnail-image thumbnail-" + id;
</script>

<section>
    <!-- a tag is a link -->
    <a
        class="thumbnail bg-slate-600 m-4"
        {href}
        on:mouseover={hover}
        on:focus={hover}
        on:mouseout={out}
        on:blur={out}
    >
        {#if !loading}
            <!-- $: classes above adds thumbnail-image / thumbnail-id to the img below -->
            <img class={classes} src={thumbnail} alt="" />
        {/if}
    </a>
    <div class="flex gap-4 mx-4">
        <div class="avatar" class:bg-slate-600={loading}>
            {#if !loading}
                <img width="30px" height="30px" src={avatar} alt="" />
            {/if}
        </div>
        <div>
            {#if !loading}
                <div class="long-text mb-4">{title}</div>
                <div class="text">{creator} | {views}</div>
            {:else}
                <div class="long-text bg-slate-600 mb-4" />
                <div class="text bg-slate-600" />
            {/if}
        </div>
    </div>
</section>

<style>
    .thumbnail-image,
    .thumbnail {
        width: 320px;
        height: 180px;
        display: inline-block;
    }

    .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .long-text {
        width: 230px;
        height: 20px;
    }

    .text {
        width: 200px;
        height: 20px;
    }
</style>
