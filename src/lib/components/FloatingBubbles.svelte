<script>
    import { onMount } from "svelte";

    let bubbles = [];

    onMount(() => {
        createBubbles();
    });

    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            bubbles.push({
                id: i,
                size: Math.random() * 30 + 10,
                left: `${Math.random() * 100}%`,
                animationDuration: Math.random() * 10 + 5,
                animationDelay: Math.random() * 5,
            });
        }
        bubbles = bubbles;
    }
</script>

<div class="bubbles-container">
    {#each bubbles as bubble (bubble.id)}
        <div
            class="bubble"
            style="
        width: {bubble.size}px;
        height: {bubble.size}px;
        left: {bubble.left};
        animation-duration: {bubble.animationDuration}s;
        animation-delay: {bubble.animationDelay}s;
      "
        ></div>
    {/each}
</div>

<style>
    .bubbles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    }

    .bubble {
        position: absolute;
        bottom: -50px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        animation: float linear infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
</style>
