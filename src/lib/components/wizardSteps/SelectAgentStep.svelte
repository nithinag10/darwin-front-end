<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    const dispatch = createEventDispatcher();

    let selectedAgent = null;

    const agents = [
        {
            id: "general",
            name: "General User",
            description: "A typical user with average tech proficiency.",
        },
        {
            id: "senior",
            name: "Senior User",
            description: "An older user with less tech experience.",
            icon: "👴",
        },
        {
            id: "power",
            name: "Power User",
            description: "An advanced user with high tech proficiency.",
        },
        {
            id: "visually-impaired",
            name: "Visually Impaired User",
            description:
                "A user with visual impairments using assistive technologies.",
        },
    ];

    function handleNext() {
        if (selectedAgent) {
            dispatch("next", { agent: selectedAgent });
        }
    }
</script>

<div class="select-agent-step" in:fade={{ duration: 300 }}>
    <h2>Select User Agent</h2>

    <div class="agent-grid">
        {#each agents as agent}
            <div
                class="agent-card"
                class:selected={selectedAgent === agent.id}
                on:click={() => (selectedAgent = agent.id)}
            >
                <div class="agent-icon">
                    {#if agent.icon}
                        {agent.icon}
                    {:else}
                        👤
                    {/if}
                </div>
                <h3>{agent.name}</h3>
                <p>{agent.description}</p>
            </div>
        {/each}
    </div>

    <div class="custom-agent">
        <h3>Create Custom User Agent</h3>
        <p>
            Coming Soon: Design your own user agent with specific
            characteristics and behaviors.
        </p>
    </div>

    <div class="buttons">
        <button
            type="button"
            class="btn btn-cancel"
            on:click={() => dispatch("prev")}
        >
            Back
        </button>
        <button
            type="submit"
            class="btn btn-submit"
            on:click={handleNext}
            disabled={!selectedAgent}
        >
            Next: Configure Analysis
        </button>
    </div>
</div>

<style>
    .select-agent-step {
        text-align: center;
    }

    h2 {
        color: #1a2a57;
        margin-bottom: 1.5rem;
    }

    .agent-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .agent-card {
        background-color: #fff;
        border: 2px solid #e0e0e0;
        border-radius: 15px;
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .agent-card:hover,
    .agent-card.selected {
        border-color: #ffd100;
        box-shadow: 0 0 15px rgba(255, 209, 0, 0.3);
    }

    .agent-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .agent-card h3 {
        color: #1a2a57;
        margin-bottom: 0.5rem;
    }

    .agent-card p {
        font-size: 0.9rem;
        color: #555;
    }

    .custom-agent {
        background-color: #f0f0f0;
        border-radius: 15px;
        padding: 1rem;
        margin-bottom: 2rem;
    }

    .custom-agent h3 {
        color: #1a2a57;
        margin-bottom: 0.5rem;
    }

    .custom-agent p {
        font-size: 0.9rem;
        color: #555;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-cancel {
        background-color: #dc3545;
        color: white;
    }

    .btn-cancel:hover {
        background-color: #c82333;
    }

    .btn-submit {
        background-color: #ffd100;
        color: #1a2a57;
    }

    .btn-submit:hover {
        background-color: #ffe666;
    }

    .btn-submit:disabled {
        background-color: #e0e0e0;
        color: #888;
        cursor: not-allowed;
    }
</style>
