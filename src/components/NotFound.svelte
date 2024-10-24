<!-- NotFound.svelte -->
<script>
    import { onMount } from "svelte";

    let astronautSrc = ""; // Path to your astronaut image

    onMount(() => {
        // You'll need to replace this with the actual path to your astronaut image
        astronautSrc = "src/asset/astronaut-image.svg";
    });
</script>

<div class="not-found-container">
    <div class="content">
        <img src={astronautSrc} alt="Lost astronaut" class="astronaut-image" />
        <h1>Page not found</h1>
        <p>
            The page you're looking for isn't available. Try to search again or
            use the go back button below.
        </p>
        <button class="cta-button">Start for free</button>
    </div>
</div>

<style>
    .not-found-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #fff;
        font-family: Arial, sans-serif;
    }

    .content {
        text-align: center;
        max-width: 400px;
        padding: 2rem;
    }

    .astronaut-image {
        width: 200px;
        height: 200px;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        color: #ff6347;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: #666;
        margin-bottom: 2rem;
    }

    .cta-button {
        background-color: #ff6347;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .cta-button:hover {
        background-color: #ff4500;
    }
</style>
