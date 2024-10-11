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
            <div style="position: relative; padding-bottom: 57%; height: 0;">
                <iframe
                    src="https://obedient-magpie.clueso.io/embed/00a216cb-7c38-4238-a340-a2a5e562fd1c"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                >
                </iframe>
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

        .description {
            font-size: 1rem;
        }
    }
</style>
