<script>
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();

    let agents = [];
    let selectedAgent = null;
    let isLoading = true;

    onMount(() => {
        // Fetch or define available agents (mock data)
        setTimeout(() => {
            agents = [
                { id: 1, name: "Agent A" },
                { id: 2, name: "Agent B" },
                { id: 3, name: "Agent C" },
            ];
            isLoading = false;
        }, 500);
    });

    function handleNext() {
        if (selectedAgent) {
            dispatch("next", { agent: selectedAgent });
        }
    }
</script>

<h2>Select User Agent</h2>

{#if isLoading}
    <p>Loading agents...</p>
{:else}
    <form on:submit|preventDefault={handleNext}>
        <div class="agent-list">
            {#each agents as agent}
                <label>
                    <input
                        type="radio"
                        name="agent"
                        bind:group={selectedAgent}
                        value={agent.name}
                    />
                    {agent.name}
                </label>
            {/each}
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
                disabled={!selectedAgent}
            >
                Next
            </button>
        </div>
    </form>
{/if}

<style>
    h2 {
        color: #1a2a57;
        margin-bottom: 1rem;
        text-align: center;
    }

    .agent-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    label {
        font-size: 1rem;
        color: #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .btn-submit {
        background-color: #28a745;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-submit:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }

    .btn-submit:hover:not(:disabled) {
        background-color: #218838;
    }

    .btn-cancel {
        background-color: #dc3545;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-cancel:hover {
        background-color: #c82333;
    }
</style>
