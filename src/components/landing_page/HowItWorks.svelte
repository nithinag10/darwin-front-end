<script>
    import { fade, fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    let isInView = false;

    const handleChange = ({ detail }) => {
        isInView = detail.inView;
    };

    const steps = [
        {
            title: "Choose Your AI Persona",
            description:
                "Select from our diverse AI personas that reflect your target users' behaviors and emotions.",
            visual: "/images/how_it_works_1.png",
        },
        {
            title: "Upload Your Product Details",
            description:
                "Easily upload your designs, prototypes, or website links. Share your brand story and objectives.",
            visual: "/images/how_it_works_2.png",
        },
        {
            title: "Set Your Simulation Scope",
            description:
                "Define the areas you want to focus on. Choose specific user flows or features to analyze.",
            visual: "/images/how_it_works_3.png",
        },
        {
            title: "Run Simulation & Get Insights",
            description:
                "Launch the simulation and receive comprehensive reports with emotional journey maps and prioritized tickets.",
            visual: "/images/how_it_works_4.png",
        },
    ];
</script>

<section
    id="how-it-works"
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={handleChange}
>
    <div class="content" class:visible={isInView}>
        <h2 in:fly={{ y: 20, duration: 600, delay: 300 }}>
            Transform User Emotions into Actionable Insights
        </h2>
        <div class="steps-container">
            {#each steps as step, index}
                <div
                    class="step"
                    in:fly={{ y: 20, duration: 600, delay: 500 + index * 100 }}
                >
                    <div class="step-number">{index + 1}</div>
                    <img
                        src={step.visual}
                        alt={step.title}
                        class="step-image"
                    />
                    <div class="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                    {#if index < steps.length - 1}
                        <div class="arrow">→</div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        background-color: #f8f9fa;
        padding: 4rem 2rem;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
    }

    h2 {
        text-align: center;
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 2rem;
    }

    .steps-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .step {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        width: calc(25% - 2rem);
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .step:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .step-number {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #007bff;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .step-image {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    .step-content {
        padding: 1rem;
        flex-grow: 1;
    }

    h3 {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
    }

    .arrow {
        position: absolute;
        right: -1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        color: #007bff;
    }

    @media (max-width: 1200px) {
        .step {
            width: calc(50% - 2rem);
        }
        .arrow {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .step {
            width: 100%;
        }
        h2 {
            font-size: 2rem;
        }
        h3 {
            font-size: 1.1rem;
        }
        p {
            font-size: 0.8rem;
        }
    }
</style>
