<script>
    import Header from "../components/Header.svelte";
    import Hero from "../components/landing_page/Hero.svelte";
    import EmotionalDisconnect from "../components/landing_page/EmotionalDisconnect.svelte";
    import HowItWorks from "../components/landing_page/HowItWorks.svelte";
    import FutureFocused from "../components/landing_page/FutureFocused.svelte";
    import Demo from "../components/landing_page/Demo.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<main>
    <Header />
    <Hero />
    <EmotionalDisconnect />
    <!-- <HowItWorks /> -->
    <FutureFocused />
    <Demo />
    <Footer />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Nunito:wght@400;600;700&display=swap");

    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Nunito", sans-serif;
        background-color: #f7f7f7;
        color: #333333;
    }

    :global(h1, h2, h3) {
        font-family: "Lora", serif;
    }
</style>
