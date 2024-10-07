<script>
    import Header from "../../../components/Header.svelte";
    import Footer from "../../../components/Footer.svelte";
    import PainPointsView from "../../../components/dashboard/PainPointsView.svelte";
</script>

<div class="page-container">
    <Header />
    <main>
        <PainPointsView />
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
