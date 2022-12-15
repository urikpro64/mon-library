<script lang="ts">
    import "../app.css";
    import TopNav from "$lib/components/TopNav/TopNav.svelte";
</script>
<div class="flex w-full h-screen">
    <div class="flex flex-row">
        <TopNav></TopNav>
        <slot />
    </div>
</div> 