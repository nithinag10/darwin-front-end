<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import Header from "../Header.svelte";
    import Footer from "../Footer.svelte";
    import WelcomeHeader from "./WelcomeHeader.svelte";
    import MetricsOverview from "./MetricsOverview.svelte";
    import ActivePainPoints from "./ActivePainPoints.svelte";
    import DevelopmentTickets from "./DevelopmentTickets.svelte";
    import AIPersona from "./AIPersona.svelte";
    import AIPersonaSelection from "../AIPersonaSelection.svelte";
    import RecentAnalysis from "./RecentAnalysis.svelte";
    import EmotionalJourneyMapping from "./EmotionalJourneyMapping.svelte";

    let mounted = false;
    let isSelectingPersona = false;
    let currentPersona = {
        title: "Tech-Savvy Professional",
        description:
            "Experienced in using modern technology and expects seamless experiences. Values efficiency and innovative solutions.",
        icon: "/path-to-ai-persona-icon.png",
    };

    onMount(() => {
        mounted = true;
    });

    function handleEditPersona() {
        isSelectingPersona = true;
    }

    function handleSelectPersona(event) {
        currentPersona = event.detail.persona;
        isSelectingPersona = false;
    }

    function handleBackToDashboard() {
        isSelectingPersona = false;
    }
</script>

<Header />

{#if mounted}
    <div class="dashboard" in:fade={{ duration: 300, delay: 150 }}>
        <WelcomeHeader />
        <div class="dashboard-content">
            <div class="main-section">
                <EmotionalJourneyMapping />
                <div class="metrics-overview">
                    <MetricsOverview />
                </div>
                <div class="ai-persona">
                    {#if isSelectingPersona}
                        <AIPersonaSelection
                            on:select={handleSelectPersona}
                            on:back={handleBackToDashboard}
                        />
                    {:else}
                        <AIPersona on:edit={handleEditPersona} />
                    {/if}
                </div>
            </div>
            <div class="side-section">
                <div class="card">
                    <ActivePainPoints />
                </div>
                <div class="card">
                    <DevelopmentTickets />
                </div>
            </div>
        </div>
        <div class="full-width-section">
            <RecentAnalysis />
        </div>
    </div>
{/if}

<Footer />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Nunito:wght@300;400;600;700&display=swap");

    :global(body) {
        font-family: "Nunito", sans-serif;
        background-color: #f7f7f7;
        color: #333333;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3) {
        font-family: "Lora", serif;
    }

    .dashboard {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .dashboard-content {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
    }

    .main-section {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .side-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .full-width-section {
        margin-top: 2rem;
    }

    @media (max-width: 1024px) {
        .dashboard-content {
            flex-direction: column;
        }

        .side-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }

    @media (max-width: 768px) {
        .dashboard {
            padding: 1rem;
        }

        .side-section {
            grid-template-columns: 1fr;
        }
    }
</style>
