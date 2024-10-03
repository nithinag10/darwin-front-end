<script>
    import { fade, fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    let isInView = false;

    const handleChange = ({ detail }) => {
        isInView = detail.inView;
    };
</script>

<section
    id="demo"
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={handleChange}
>
    <div class="content" class:visible={isInView}>
        <h2 in:fly={{ y: 20, duration: 600, delay: 300 }}>
            See Our Product in Action
        </h2>
        <div class="video-container" in:fade={{ duration: 800, delay: 500 }}>
            <div class="video-placeholder">
                <span>Demo Video Coming Soon</span>
                <button class="play-button">▶</button>
            </div>
        </div>
        <p class="description">
            Experience how our AI-powered solution transforms user emotions into
            actionable insights, helping you build better products and save
            development time.
        </p>
    </div>
</section>

<style>
    section {
        background-color: #f8f9fa;
        padding: 6rem 2rem;
    }

    .content {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    .content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    h2 {
        font-family: "Lora", serif;
        font-size: 2.5rem;
        color: #333333;
        margin-bottom: 2rem;
    }

    .video-container {
        max-width: 800px;
        margin: 0 auto 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        overflow: hidden;
    }

    .video-placeholder {
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        aspect-ratio: 16 / 9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: white;
        position: relative;
    }

    .play-button {
        background-color: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        color: white;
        font-size: 2rem;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }

    .play-button:hover {
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }

    .description {
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.1rem;
        color: #555;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        section {
            padding: 4rem 1rem;
        }

        h2 {
            font-size: 2rem;
        }

        .play-button {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
        }

        .description {
            font-size: 1rem;
        }
    }
</style>
