<script>
    import { onMount } from 'svelte';
    import '../styles.scss';

    onMount(async () => {
        await import('bootstrap');
    });
</script>

<nav class="navbar navbar-expand-lg bg-primary">
    <a class="navbar-brand ms-4 text-light" href="/">YTLater</a>
</nav>

<div class="p-5">
    <slot />
</div>