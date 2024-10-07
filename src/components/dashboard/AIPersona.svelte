<script>
    import { fade, fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import { goto } from "$app/navigation";

    const dispatch = createEventDispatcher();

    let activeTab = "AI Persona";
    let tabs = ["AI Persona", "Simulation Scope", "Product Details"];

    let aiPersonaContent = {
        title: "Tech-Savvy Professional",
        description:
            "Experienced in using modern technology and expects seamless experiences. Values efficiency and innovative solutions.",
        icon: "/path-to-ai-persona-icon.png",
    };

    let simulationScopeContent = {
        title: "Full Product Experience",
        description:
            "This simulation covers the entire product journey, from onboarding to advanced feature usage.",
        icon: "/path-to-simulation-scope-icon.png",
    };

    let productDetailsContent = {
        title: "EmotiAI Dashboard",
        description:
            "An AI-powered emotional intelligence platform for analyzing and improving user experiences.",
        icon: "/path-to-product-details-icon.png",
    };

    function getActiveContent() {
        switch (activeTab) {
            case "AI Persona":
                return aiPersonaContent;
            case "Simulation Scope":
                return simulationScopeContent;
            case "Product Details":
                return productDetailsContent;
            default:
                return aiPersonaContent;
        }
    }

    function handleEdit() {
        dispatch("edit");
    }

    function navigateToPersonaSelection() {
        goto("/ai-persona-selection");
    }

    function goToProductDetails() {
        // Implement navigation to the product details page
        // This could be done using Svelte routing or by emitting an event
        // that the parent component can handle
        dispatch("editProduct");
    }
</script>

<div class="card">
    <div class="tabs">
        {#each tabs as tab}
            <button
                class="tab-button"
                class:active={activeTab === tab}
                on:click={() => (activeTab = tab)}
            >
                {tab}
            </button>
        {/each}
    </div>
    <div class="content" in:fade>
        {#key activeTab}
            <img
                src={getActiveContent().icon}
                alt={activeTab}
                class="content-icon"
            />
            <div>
                <h3>{getActiveContent().title}</h3>
                <p>{getActiveContent().description}</p>
                {#if activeTab === "AI Persona"}
                    <button
                        class="edit-button"
                        on:click={navigateToPersonaSelection}
                    >
                        Change AI Persona
                    </button>
                {/if}
            </div>
        {/key}
    </div>
</div>

<style>
    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .tabs {
        display: flex;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .tab-button {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: #4a5568;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        flex: 1 1 auto;
    }

    .tab-button.active {
        color: #4299e1;
        border-bottom-color: #4299e1;
    }

    .content {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .content-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        object-fit: cover;
    }

    h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.2rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
    }

    p {
        color: #4a5568;
        font-size: 0.9rem;
    }

    .edit-button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #4299e1;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .edit-button:hover {
        background-color: #3182ce;
    }

    @media (max-width: 768px) {
        .content {
            text-align: center;
        }
    }
</style>
