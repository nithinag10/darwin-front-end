<script>
    import { fade, fly } from "svelte/transition";
    import { spring } from "svelte/motion";

    let y = spring(0, { stiffness: 0.1, damping: 0.25 });
</script>

<section in:fade={{ duration: 800, delay: 300 }}>
    <div class="content">
        <div class="left-column">
            <h1 in:fly={{ y: 20, duration: 600, delay: 500 }}>
                Bridge the Emotional Gap Between Users and Your Product
            </h1>
            <p in:fly={{ y: 20, duration: 600, delay: 700 }}>
                Our AI agents simulate real user emotions—frustration,
                excitement, confusion—to help you build better, emotionally
                connected products.
            </p>
            <a
                href="#demo"
                class="cta-button"
                in:fly={{ y: 20, duration: 600, delay: 900 }}
                on:mouseenter={() => y.set(-5)}
                on:mouseleave={() => y.set(0)}
                style="transform: translateY({$y}px)"
            >
                See How It Works
            </a>
        </div>
        <div class="right-column">
            <div
                class="video-placeholder"
                in:fade={{ duration: 800, delay: 1100 }}
            ></div>
        </div>
    </div>
</section>

<style>
    section {
        background: linear-gradient(135deg, #f7f7f7 0%, #e0e0e0 100%);
        min-height: 90vh;
        display: flex;
        align-items: center;
        padding: 4rem 2rem;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    .left-column {
        flex: 1.2;
    }

    .right-column {
        flex: 1;
    }

    h1 {
        font-size: 3.2rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .cta-button {
        font-size: 1.2rem;
        padding: 0.9rem 1.8rem;
        border-radius: 50px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 123, 255, 0.1);
    }

    .cta-button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 123, 255, 0.2);
    }

    .video-placeholder {
        background: linear-gradient(45deg, #007bff, #ff6b6b);
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        position: relative;
    }

    .video-placeholder::before {
        content: "Video Coming Soon";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>
