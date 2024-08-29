<script>
    import { fade, fly } from "svelte/transition";
    import { inview } from "svelte-inview";
    import FloatingBubbles from "./FloatingBubbles.svelte";
    import { onMount } from "svelte";

    export const step1Icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
  <line x1="9" y1="9" x2="9.01" y2="9"></line>
  <line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>
`;

    export const step2Icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
</svg>
`;

    export const step3Icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
  <line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>
`;

    export const step4Icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13"></line>
  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
`;

    const steps = [
        {
            title: "Create Custom AI Agents",
            description:
                "We develop AI agents tailored to your product and its target audience, ensuring accurate user simulation.",
            icon: step1Icon,
        },
        {
            title: "Gather Product Details",
            description:
                "Our system collects and analyzes comprehensive information about your product's features and user flows.",
            icon: step2Icon,
        },
        {
            title: "AI-Powered Analysis",
            description:
                "Our custom AI agents simulate diverse user interactions, identifying potential pain points and areas for improvement.",
            icon: step3Icon,
        },
        {
            title: "Actionable Insights Delivery",
            description:
                "Receive a detailed report with data-driven recommendations to enhance your product's user experience.",
            icon: step4Icon,
        },
    ];

    let visibleSteps = [];
    let currentGlowIndex = 0;

    function handleStepInView(step) {
        visibleSteps = [...visibleSteps, step];
    }

    onMount(() => {
        const glowInterval = setInterval(() => {
            currentGlowIndex = (currentGlowIndex + 1) % steps.length;
        }, 3000); // Change glow every 3 seconds

        return () => clearInterval(glowInterval);
    });
</script>

<section class="how-it-works">
    <FloatingBubbles />
    <div class="container">
        <h2>How LemonSoda.ai Works</h2>
        <p class="subtitle">
            Uncover hidden user insights in four simple steps
        </p>
        <div class="steps-container">
            {#each steps as step, index}
                <div
                    class="step {currentGlowIndex === index ? 'glow' : ''}"
                    use:inview={{ unobserveOnEnter: true }}
                    on:enter={() => handleStepInView(index)}
                >
                    {#if visibleSteps.includes(index)}
                        <div
                            class="step-content"
                            in:fly={{
                                y: 50,
                                duration: 500,
                                delay: index * 200,
                            }}
                        >
                            <div class="step-icon">{@html step.icon}</div>
                            <h3>Step {index + 1}: {step.title}</h3>
                            <p>{step.description}</p>
                            <button class="learn-more">Learn More</button>
                        </div>
                    {/if}
                </div>
                {#if index < steps.length - 1}
                    <div class="connector">
                        <div class="lemon-flow">🍋</div>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="cta">
            <a href="#" class="btn"
                >Ready to optimize your product? Get started now</a
            >
        </div>
    </div>
</section>

<style>
    .how-it-works {
        background: linear-gradient(135deg, #fff9e6, #ffe4b5);
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
    }

    h2 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #1a2a57;
        font-family: "Fredoka One", cursive;
    }

    .subtitle {
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 4rem;
        color: #4a5568;
    }

    .steps-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 4rem;
    }

    .step {
        flex: 0 0 auto;
        width: 220px;
        max-width: none;
        z-index: 2;
        background-color: #fff9e6;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .step.glow {
        box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.7);
        transform: scale(1.05);
    }

    .connector {
        flex: 1;
        height: 6px;
        background-color: rgba(26, 42, 87, 0.2);
        margin: 0 15px;
        position: relative;
        overflow: visible;
        border-radius: 3px;
    }

    .lemon-flow {
        position: absolute;
        top: 50%;
        left: -30px;
        font-size: 30px;
        transform: translateY(-50%);
        animation: flowLemon 3s linear infinite;
        filter: drop-shadow(0 0 5px rgba(255, 255, 0, 0.7));
    }

    @keyframes flowLemon {
        0% {
            left: -30px;
            transform: translateY(-50%) rotate(0deg);
        }
        100% {
            left: calc(100% + 30px);
            transform: translateY(-50%) rotate(360deg);
        }
    }

    .step-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

    .step-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    h3 {
        color: #1a2a57;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        font-family: "Fredoka One", cursive;
    }

    p {
        color: #4a5568;
        font-size: 0.8rem;
        line-height: 1.4;
        margin-bottom: 1rem;
    }

    .learn-more {
        background: none;
        border: 2px solid #ff6b35;
        color: #ff6b35;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 5px 10px;
        border-radius: 5px;
        align-self: flex-start;
    }

    .learn-more:hover {
        background-color: #ff6b35;
        color: #fff;
    }

    .cta {
        text-align: center;
    }

    @media (max-width: 768px) {
        .steps-container {
            flex-direction: column;
        }

        .step {
            width: 100%;
            margin: 0 0 2rem 0;
        }

        .connector {
            width: 6px;
            height: 50px;
            margin: 15px 0;
        }

        .lemon-flow {
            animation: flowLemonVertical 3s linear infinite;
        }

        @keyframes flowLemonVertical {
            0% {
                top: -30px;
                transform: translateX(-50%) rotate(0deg);
            }
            100% {
                top: calc(100% + 30px);
                transform: translateX(-50%) rotate(360deg);
            }
        }
    }
</style>
