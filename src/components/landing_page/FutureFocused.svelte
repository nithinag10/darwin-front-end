<script>
    import { fade, fly } from "svelte/transition";
    import { spring } from "svelte/motion";

    let y = spring(0, { stiffness: 0.1, damping: 0.25 });
</script>

<section in:fade={{ duration: 800, delay: 300 }}>
    <div class="content">
        <h2 in:fly={{ y: 20, duration: 600, delay: 500 }}>
            Move from Problems to Progress: Save Development Time
        </h2>
        <div class="card-container">
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 700 }}>
                <div class="icon">🔍</div>
                <h3>Discover Pain Points</h3>
                <p>Uncover issues before they become problems.</p>
            </div>
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 900 }}>
                <div class="icon">🎫</div>
                <h3>Generate Expert Tickets</h3>
                <p>
                    Turn user frustrations into actionable development tickets.
                </p>
                <p class="subtext">
                    Each ticket includes insights based on emotional analysis,
                    highlighting priority features within your business
                    constraints.
                </p>
            </div>
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 1100 }}>
                <div class="icon">💰</div>
                <h3>Save Resources</h3>
                <p>Eliminate non-essential features and focus on real value.</p>
                <p class="subtext">
                    Save development time and keep costs under control by
                    prioritizing impactful improvements.
                </p>
            </div>
        </div>
        <button
            in:fly={{ y: 20, duration: 600, delay: 1300 }}
            on:mouseenter={() => y.set(-5)}
            on:mouseleave={() => y.set(0)}
            style="transform: translateY({$y}px)"
        >
            Get Emotion-Driven Insights & Development Tickets
        </button>
    </div>
</section>

<style>
    section {
        background-color: #ffffff;
        padding: 4rem 2rem;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        font-family: "Lora", serif;
        font-size: 2.5rem;
        color: #333333;
        margin-bottom: 2rem;
    }

    .card-container {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .card {
        flex: 1;
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: #333333;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: #555555;
        margin-bottom: 1rem;
    }

    .subtext {
        font-size: 0.9rem;
        color: #777777;
    }

    button {
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    button:hover {
        background-color: #ff5252;
    }

    @media (max-width: 968px) {
        .card-container {
            flex-direction: column;
        }

        .card {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.9rem;
        }

        button {
            font-size: 1rem;
            padding: 0.6rem 1.2rem;
        }
    }
</style>
