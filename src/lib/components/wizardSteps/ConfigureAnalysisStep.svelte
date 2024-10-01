<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let analysisType = "";
    let targetMetrics = "";
    let priorityLevel = "Medium";

    function handleNext() {
        dispatch("next", {
            config: {
                analysisType,
                targetMetrics,
                priorityLevel,
            },
        });
    }
</script>

<h2>Configure Analysis</h2>

<form on:submit|preventDefault={handleNext}>
    <div>
        <label for="analysis-type">Analysis Type:</label>
        <select id="analysis-type" bind:value={analysisType} required>
            <option value="" disabled>Select Type</option>
            <option value="Usability">Usability</option>
            <option value="Performance">Performance</option>
            <option value="Security">Security</option>
        </select>
    </div>

    <div>
        <label for="target-metrics">Target Metrics:</label>
        <input
            type="text"
            id="target-metrics"
            bind:value={targetMetrics}
            placeholder="e.g., Load Time, Error Rate"
            required
        />
    </div>

    <div>
        <label for="priority-level">Priority Level:</label>
        <select id="priority-level" bind:value={priorityLevel} required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
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
            disabled={!analysisType || !targetMetrics}
        >
            Next
        </button>
    </div>
</form>

<style>
    h2 {
        color: #1a2a57;
        margin-bottom: 1rem;
        text-align: center;
    }

    form div {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #333;
    }

    input[type="text"],
    select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
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
