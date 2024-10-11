<script>
    import { fade } from "svelte/transition";
    export let message;
</script>

<div class="toast" transition:fade={{ duration: 300 }}>
    {message}
</div>

<style>
    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
    }
</style>
