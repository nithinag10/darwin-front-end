<script>
    import { fade, fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    let isInView = false;

    const handleChange = ({ detail }) => {
        isInView = detail.inView;
    };
</script>

<section
    use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
    on:change={handleChange}
>
    {#if isInView}
        <div class="content">
            <h2 in:fly={{ y: 20, duration: 600 }}>
                Your Shortcut to Customer Understanding
            </h2>
            <p class="main-text" in:fly={{ y: 20, duration: 600, delay: 200 }}>
                Traditional analytics tell you what users do; we reveal how they
                feel. <span class="highlight">LemonSoda.ai</span> simulate real user
                emotions—frustration, excitement, confusion—to help you build products
                that truly resonate.
            </p>
            <p class="cta-text" in:fly={{ y: 20, duration: 600, delay: 400 }}>
                Whether you're a startup without an existing customer base or an
                established company looking to delve deeper, our solution
                provides unparalleled emotional insights without the need for
                extensive data.
            </p>
        </div>
    {/if}
</section>

<style>
    section {
        background-color: #f9f9f9;
        background-image: linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%);
        padding: 6rem 2rem;
        overflow: hidden;
    }

    .content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }

    h2 {
        font-family: "Lora", serif;
        font-size: 2.5rem;
        color: #333333;
        margin-bottom: 1.5rem;
        position: relative;
    }

    h2::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background-color: #ff6b6b;
    }

    .main-text {
        font-size: 1.2rem;
        color: #555555;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .highlight {
        color: #ff6b6b;
        font-weight: bold;
    }

    .cta-text {
        font-size: 1.4rem;
        color: #007bff;
        font-weight: bold;
        line-height: 1.6;
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    .content::before,
    .content::after {
        content: "🍋";
        font-size: 3rem;
        position: absolute;
        opacity: 0.1;
        animation: float 6s ease-in-out infinite;
    }

    .content::before {
        top: -20px;
        left: -20px;
    }

    .content::after {
        bottom: -20px;
        right: -20px;
        animation-delay: -3s;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .main-text {
            font-size: 1rem;
        }

        .cta-text {
            font-size: 1.2rem;
        }
    }
</style>
