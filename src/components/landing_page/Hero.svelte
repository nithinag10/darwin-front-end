<!-- Hero.svelte -->
<script>
    import { goto } from "$app/navigation";

    function startForFree() {
        goto("/ai-persona-selection");
    }
</script>

<section class="hero">
    <div class="content">
        <h1>Validate your crazy idea</h1>
        <p>
            Access AI-driven feedback from simulated customers. Get the insights
            and confidence to build your product, just like big companies do.
        </p>
        <button class="cta" on:click={startForFree}>Start for free</button>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff; /* Solid background color */
        padding: 2rem;
    }

    .content {
        text-align: center;
        max-width: 800px;
    }

    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: #666;
    }

    .cta {
        background-color: #ff6347;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        border: none;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .cta:hover {
        background-color: #ff4500;
    }
</style>
