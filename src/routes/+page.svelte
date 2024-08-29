<script>
    import { onMount } from "svelte";
    import { spring } from "svelte/motion";
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Features from "$lib/components/Features.svelte";
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Benefits from "$lib/components/Benefits.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import CTA from "$lib/components/CTA.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<main>
    <Hero />
    <Features />
    <HowItWorks />
    <!-- <Benefits /> -->
    <!-- <Testimonials /> -->
    <!-- <Pricing /> -->
    <!-- <FAQ />
    <CTA /> -->
</main>
<Footer />

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        font-family: "Inter", sans-serif;
        background-color: #fff9e6;
        color: #1a2a57;
        line-height: 1.6;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Fredoka One", cursive;
        color: #1a2a57;
    }

    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    :global(.btn) {
        background-color: #ffd100;
        color: #1a2a57;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 0 15px rgba(255, 209, 0, 0.3);
    }

    :global(.btn:hover) {
        background-color: #ffe666;
        transform: translateY(-2px);
        box-shadow:
            0 6px 10px rgba(0, 0, 0, 0.15),
            0 0 20px rgba(255, 209, 0, 0.5);
    }

    :global(.section) {
        margin-bottom: 4rem;
        border-radius: 40px;
        overflow: hidden;
    }

    :global(.card) {
        background-color: white;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        transition: all 0.3s ease;
    }

    :global(.card:hover) {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    :global(.accent-text) {
        color: #ff6b35;
    }

    @media (max-width: 768px) {
        main {
            padding: 1rem;
        }

        :global(.section) {
            border-radius: 30px;
        }
    }
</style>
