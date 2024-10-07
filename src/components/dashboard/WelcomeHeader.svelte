<script>
    import { fade } from "svelte/transition";
    let userName = "Sarah";
    let currentTime = new Date();
    $: greeting = getGreeting(currentTime);

    function getGreeting(time) {
        const hour = time.getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    }
</script>

<div class="hero-section" in:fade={{ duration: 300, delay: 150 }}>
    <div class="hero-content">
        <h1>{greeting}, {userName}!</h1>
        <p>Welcome to your EmotiAI Dashboard. Here's your daily overview.</p>
        <button class="cta-button">Start New Analysis</button>
    </div>
    <div class="hero-image">
        <img src="/path-to-hero-image.svg" alt="Dashboard illustration" />
    </div>
</div>

<style>
    .hero-section {
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        border-radius: 16px;
        padding: 3rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        overflow: hidden;
        position: relative;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .hero-content {
        max-width: 60%;
        flex: 1 1 300px;
        text-align: left;
        z-index: 1;
    }

    h1 {
        font-family: "Lora", serif;
        font-size: 2.5rem;
        color: #ffffff;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
        font-size: 1.1rem;
        color: #e2e8f0;
        margin-bottom: 1.5rem;
    }

    .cta-button {
        background-color: #ffc107;
        color: #2d3748;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .cta-button:hover {
        background-color: #ffd54f;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    .hero-image {
        position: absolute;
        right: -5%;
        bottom: -10%;
        width: 50%;
        opacity: 0.1;
        flex: 1 1 200px;
    }

    .hero-image img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
        }

        .hero-content {
            max-width: 100%;
        }

        .hero-image {
            position: relative;
            right: 0;
            bottom: 0;
            width: 80%;
            margin-top: 2rem;
            opacity: 0.2;
        }
    }
</style>
