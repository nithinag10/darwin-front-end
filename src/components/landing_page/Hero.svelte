<script>
    import { fade, fly } from "svelte/transition";
    import { spring } from "svelte/motion";
    import { onMount } from "svelte";

    let y = spring(0, { stiffness: 0.1, damping: 0.25 });
    let headerHeight = 0;

    onMount(() => {
        const header = document.querySelector("header");
        if (header) {
            headerHeight = header.offsetHeight;
        }
    });
</script>

<section
    in:fade={{ duration: 800, delay: 300 }}
    style="margin-top: -{headerHeight}px;"
>
    <div class="content">
        <div class="left-column">
            <h1 in:fly={{ y: 20, duration: 600, delay: 500 }}>
                Understand Your Customers Like Never Before—Without Data Burden
            </h1>
            <p in:fly={{ y: 20, duration: 600, delay: 700 }}>
                Our AI agents mimic user emotions and actions, offering a deep
                understanding of customer needs for your product without the
                need for large customer data
            </p>
            <div
                class="cta-container"
                in:fly={{ y: 20, duration: 600, delay: 900 }}
            >
                <a
                    href="#demo"
                    class="cta-button primary"
                    on:mouseenter={() => y.set(-5)}
                    on:mouseleave={() => y.set(0)}
                    style="transform: translateY({$y}px)"
                >
                    See How It Works
                </a>
                <a href="#contact" class="cta-button secondary">
                    Book a Demo Call
                </a>
            </div>
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
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
    }

    .content {
        max-width: 1200px;
        width: 100%;
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

    .cta-container {
        display: flex;
        gap: 1rem;
    }

    .cta-button {
        font-size: 1.2rem;
        padding: 0.9rem 1.8rem;
        border-radius: 50px;
        transition: all 0.3s ease;
        text-decoration: none;
        font-weight: 600;
    }

    .cta-button.primary {
        background-color: #007bff;
        color: white;
        box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        animation: glow 1.5s ease-in-out infinite alternate;
    }

    .cta-button.primary:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(0, 123, 255, 0.7);
    }

    .cta-button.secondary {
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;
    }

    .cta-button.secondary:hover {
        background-color: rgba(0, 123, 255, 0.1);
        transform: translateY(-2px);
    }

    @keyframes glow {
        from {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        to {
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.8);
        }
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

    @media (max-width: 768px) {
        section {
            padding: 2rem 1rem;
        }

        .content {
            flex-direction: column;
            gap: 2rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        .cta-container {
            flex-direction: column;
        }

        .cta-button {
            width: 100%;
            text-align: center;
        }
    }
</style>
