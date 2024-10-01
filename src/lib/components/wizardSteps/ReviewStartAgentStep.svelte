<script>
    import { createEventDispatcher } from "svelte";

    export let onboardData = {};
    export let selectedAgent = null;
    export let analysisConfig = {};

    const dispatch = createEventDispatcher();

    function handleStart() {
        // Here you would typically trigger the analysis process
        dispatch("next");
    }
</script>

<h2>Review & Start Agent</h2>

<div class="review-section">
    <h3>Product Details</h3>
    <p><strong>Figma File Key:</strong> {onboardData.figmaFileKey}</p>
    <p><strong>Figma Access Token:</strong> {onboardData.figmaAccessToken}</p>
    <p>
        <strong>Product Landing Page URL:</strong>
        {onboardData.productLandingPageUrl}
    </p>
    <p>
        <strong>Custom Product Information:</strong>
        {onboardData.customProductInformation}
    </p>
</div>

<div class="review-section">
    <h3>Selected Agent</h3>
    <p>{selectedAgent}</p>
</div>

<div class="review-section">
    <h3>Analysis Configuration</h3>
    <p><strong>Analysis Type:</strong> {analysisConfig.analysisType}</p>
    <p><strong>Target Metrics:</strong> {analysisConfig.targetMetrics}</p>
    <p><strong>Priority Level:</strong> {analysisConfig.priorityLevel}</p>
</div>

<div class="buttons">
    <button class="btn btn-cancel" on:click={() => dispatch("prev")}>
        Back
    </button>
    <button class="btn btn-submit" on:click={handleStart}> Start Agent </button>
</div>

<style>
    h2 {
        color: #1a2a57;
        margin-bottom: 1rem;
        text-align: center;
    }

    .review-section {
        margin-bottom: 1rem;
    }

    .review-section h3 {
        margin-bottom: 0.5rem;
        color: #555;
    }

    .review-section p {
        margin: 0.25rem 0;
        color: #333;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1.5rem;
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

    .btn-submit:hover {
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
