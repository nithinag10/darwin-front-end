<script>
    import { onDestroy } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { AnalysisWizardStore } from "$lib/stores/AnalysisWizardStore";
    import Stepper from "./Stepper.svelte";
    import OnboardSteps from "./wizardSteps/OnboardSteps.svelte";
    import SelectAgentStep from "./wizardSteps/SelectAgentStep.svelte";
    import ConfigureAnalysisStep from "./wizardSteps/ConfigureAnalysisStep.svelte";
    import ReviewStartAgentStep from "./wizardSteps/ReviewStartAgentStep.svelte";
    import ResultStep from "./wizardSteps/ResultStep.svelte";

    let showWizard = true; // Always show the wizard

    // Wizard state
    let currentStep = 1;
    let onboardData = {};
    let selectedAgent = null;
    let analysisConfig = {};

    // Update the AnalysisWizardStore
    const wizardUnsubscribe = AnalysisWizardStore.subscribe((store) => {
        currentStep = store.currentStep;
    });

    function resetWizard() {
        currentStep = 1;
        onboardData = {};
        selectedAgent = null;
        analysisConfig = {};
        AnalysisWizardStore.set({ currentStep: 1 });
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
        AnalysisWizardStore.set({ currentStep });
        console.log("Moved to step:", currentStep);
    }

    function handlePrev() {
        if (currentStep > 1) {
            currentStep -= 1;
            AnalysisWizardStore.set({ currentStep });
            console.log("Moved back to step:", currentStep);
        }
    }

    function applyAnalysis() {
        // Implement your analysis logic here
        console.log("Applying Analysis with the following data:");
        console.log("Onboard Data:", onboardData);
        console.log("Selected Agent:", selectedAgent);
        console.log("Analysis Config:", analysisConfig);
        // Navigate to Result Step
        currentStep += 1;
        AnalysisWizardStore.set({ currentStep });
        console.log("Moved to step:", currentStep);
    }

    function closeWizard() {
        modalStore.set({ showModal: false, modalType: null });
        console.log("Wizard closed");
    }

    onDestroy(() => {
        wizardUnsubscribe();
        console.log("Unsubscribed from AnalysisWizardStore");
    });
</script>

<div class="wizard-container" in:fade={{ duration: 300, delay: 300 }}>
    <div class="stepper-container">
        <Stepper />
    </div>
    <div class="wizard-content" in:fly={{ y: 20, duration: 300, delay: 300 }}>
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
        {:else if currentStep === 5}
            <ResultStep on:close={closeWizard} />
        {/if}
    </div>
    {#if currentStep < 5}
        <button class="btn-cancel" on:click={closeWizard}>Cancel</button>
    {/if}
</div>

<style>
    .wizard-container {
        background: #fff9e6;
        padding: 2rem;
        border-radius: 20px;
        width: 100%;
        max-width: 800px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        position: relative;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
    }

    .stepper-container {
        margin-bottom: 2rem;
    }

    .wizard-content {
        background: #ffffff;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .btn-cancel {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: #ff6b35;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-cancel:hover {
        background-color: #e55a2b;
    }
</style>
