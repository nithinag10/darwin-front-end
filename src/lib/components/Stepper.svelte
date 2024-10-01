<script>
    import { AnalysisWizardStore } from "$lib/stores/AnalysisWizardStore";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    $: step = $AnalysisWizardStore.currentStep;

    const steps = [
        "Onboard",
        "Select Agent",
        "Configure Analysis",
        "Review & Start Agent",
        "Complete",
    ];

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut,
    });

    $: progress.set((step - 1) / (steps.length - 1));
</script>

<div class="stepper">
    <div class="progress-bar" style="width: {$progress * 100}%"></div>
    {#each steps as stepName, index}
        <div class="step" class:active={index + 1 <= step}>
            <div class="step-number">
                {#if index + 1 < step}
                    <svg class="checkmark" viewBox="0 0 24 24">
                        <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        />
                    </svg>
                {:else}
                    {index + 1}
                {/if}
            </div>
            <div class="step-name">{stepName}</div>
        </div>
    {/each}
</div>

<style>
    .stepper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
        padding: 20px 0;
    }

    .progress-bar {
        position: absolute;
        top: 50%;
        left: 0;
        height: 4px;
        background-color: #ffd100;
        transition: width 0.4s ease;
        z-index: 1;
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
    }

    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        color: #1a2a57;
        border: 2px solid #1a2a57;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .step.active .step-number {
        background-color: #ffd100;
        border-color: #ffd100;
        color: #1a2a57;
    }

    .step-name {
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #1a2a57;
        text-align: center;
        max-width: 80px;
        transition: all 0.3s ease;
    }

    .step.active .step-name {
        font-weight: bold;
        color: #1a2a57;
    }

    .checkmark {
        width: 24px;
        height: 24px;
        fill: #1a2a57;
    }

    @media (max-width: 600px) {
        .step-name {
            display: none;
        }
    }
</style>
