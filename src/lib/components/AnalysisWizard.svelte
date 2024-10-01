<script>
    import { modalStore } from "$lib/stores/modalStore";
    import { onDestroy } from "svelte";
    import OnboardSteps from "./wizardSteps/OnboardSteps.svelte";
    import SelectAgentStep from "./wizardSteps/SelectAgentStep.svelte";
    import ConfigureAnalysisStep from "./wizardSteps/ConfigureAnalysisStep.svelte";
    import ReviewStartAgentStep from "./wizardSteps/ReviewStartAgentStep.svelte";

    let showWizard = false;

    // Wizard state
    let currentStep = 1;
    let onboardData = {};
    let selectedAgent = null;
    let analysisConfig = {};

    // Subscribe to modalStore
    const unsubscribe = modalStore.subscribe((value) => {
        showWizard = value.showModal && value.modalType === "analysisWizard";
        console.log("Modal Store Updated:", value, "ShowWizard:", showWizard);
        if (!showWizard) {
            resetWizard();
        }
    });

    function resetWizard() {
        currentStep = 1;
        onboardData = {};
        selectedAgent = null;
        analysisConfig = {};
        console.log("Wizard reset");
    }

    function handleNext(event) {
        if (event.detail) {
            if (currentStep === 1) {
                onboardData = { ...onboardData, ...event.detail };
                console.log("Onboard data updated:", onboardData);
            } else if (currentStep === 2) {
                selectedAgent = event.detail.agent;
                console.log("Selected agent:", selectedAgent);
            } else if (currentStep === 3) {
                analysisConfig = { ...analysisConfig, ...event.detail.config };
                console.log("Analysis config updated:", analysisConfig);
            }
        }
        currentStep += 1;
        console.log("Moved to step:", currentStep);
    }

    function handlePrev() {
        if (currentStep > 1) {
            currentStep -= 1;
            console.log("Moved back to step:", currentStep);
        }
    }

    function applyAnalysis() {
        // Implement your analysis logic here
        console.log("Applying Analysis with the following data:");
        console.log("Onboard Data:", onboardData);
        console.log("Selected Agent:", selectedAgent);
        console.log("Analysis Config:", analysisConfig);
        closeWizard();
    }

    function closeWizard() {
        modalStore.set({ showModal: false, modalType: null });
        console.log("Wizard closed");
    }

    onDestroy(() => {
        unsubscribe();
        console.log("Unsubscribed from modalStore");
    });
</script>

{#if showWizard}
    <div class="modal-overlay" on:click|self={closeWizard}>
        <div class="wizard-container">
            {#if currentStep === 1}
                <OnboardSteps {onboardData} on:next={handleNext} />
            {:else if currentStep === 2}
                <SelectAgentStep
                    {selectedAgent}
                    on:next={handleNext}
                    on:prev={handlePrev}
                />
            {:else if currentStep === 3}
                <ConfigureAnalysisStep
                    {analysisConfig}
                    on:next={handleNext}
                    on:prev={handlePrev}
                />
            {:else if currentStep === 4}
                <ReviewStartAgentStep
                    {onboardData}
                    {selectedAgent}
                    {analysisConfig}
                    on:next={applyAnalysis}
                    on:prev={handlePrev}
                />
            {/if}
            <button class="btn-cancel" on:click={closeWizard}>Cancel</button>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(26, 42, 87, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    }

    .wizard-container {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        width: 90%;
        max-width: 600px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .btn-cancel {
        position: absolute;
        top: 1rem;
        right: 1rem;
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
