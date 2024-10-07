<script>
    import Header from "../../../components/Header.svelte";
    import Footer from "../../../components/Footer.svelte";
    import DevelopmentTicketsView from "../../../components/dashboard/DevelopmentTicketsView.svelte";
</script>

<div class="page-container">
    <Header />
    <main>
        <DevelopmentTicketsView />
    </main>
</div>
<Footer />

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        background-color: #f7fafc;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
    }
</style>
