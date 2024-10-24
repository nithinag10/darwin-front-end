<!-- App.svelte -->
<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/landing_page/Hero.svelte";
    import CustomerInsights from "./components/landing_page/CustomerInsights.svelte";
</script>

<Header />
<Hero />
<CustomerInsights />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
</style>
