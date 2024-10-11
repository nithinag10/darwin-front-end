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
                "Select from our diverse AI personas that reflect your target users' behaviors and emotions. Customize or create your own to perfectly match your audience.",
            icon: "👤",
        },
        {
            title: "Upload Your Product Details",
            description:
                "Easily upload your designs, prototypes, or website links. Share your brand story and objectives to provide context for our AI agents.",
            icon: "📤",
        },
        {
            title: "Set Your Simulation Scope",
            description:
                "Define the areas you want to focus on. Choose specific user flows or features, and adjust simulation settings to align with your goals.",
            icon: "🎯",
        },
        {
            title: "Run Simulation and Receive Insights",
            description:
                "Launch the simulation and let our AI agents interact with your product. Receive comprehensive reports with emotional journey maps, pain points, and prioritized development tickets.",
            icon: "📊",
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
            Transform User Emotions into Actionable Insights in Four Simple
            Steps
        </h2>
        <p class="subheading" in:fly={{ y: 20, duration: 600, delay: 500 }}>
            See how LemonSoda.ai empowers you to build emotionally resonant
            products without the need for extensive data or complex setups.
        </p>
        <div class="steps-container">
            {#each steps as step, index}
                <div
                    class="step"
                    in:fly={{ y: 20, duration: 600, delay: 700 + index * 200 }}
                >
                    <div class="step-number">{index + 1}</div>
                    <div class="step-content">
                        <div class="step-icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                    {#if index < steps.length - 1}
                        <div class="connector"></div>
                    {/if}
                </div>
            {/each}
        </div>
        <div
            class="closing-statement"
            in:fly={{ y: 20, duration: 600, delay: 1500 }}
        >
            <p>
                That's it! In just a few steps, you're on your way to creating
                products that truly connect with your users on an emotional
                level.
            </p>
            <button class="main-cta">Get Started Now</button>
        </div>
    </div>
</section>

<style>
    section {
        background-color: #f0f4f8;
        background-image: linear-gradient(135deg, #f0f4f8 0%, #d7e3fc 100%);
        padding: 6rem 2rem;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
    }

    .subheading {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 3rem;
    }

    .steps-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .step {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 800px;
        position: relative;
    }

    .step-number {
        background-color: #007bff;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 2;
    }

    .step-content {
        background-color: white;
        border-radius: 10px;
        padding: 2rem;
        margin-left: -20px;
        flex-grow: 1;
        text-align: left;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .step-content:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .step-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: #666;
    }

    .connector {
        position: absolute;
        left: 20px;
        top: 100%;
        width: 2px;
        height: 2rem;
        background-color: #007bff;
    }

    .closing-statement {
        margin-top: 3rem;
    }

    .main-cta {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        margin-top: 1rem;
    }

    .main-cta:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .subheading {
            font-size: 1rem;
        }

        .step-content {
            padding: 1.5rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
</style>
