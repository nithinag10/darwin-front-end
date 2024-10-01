<script>
    import AnalysisWizard from "$lib/components/AnalysisWizard.svelte";
    import Stepper from "$lib/components/Stepper.svelte";
</script>

<main class="wizard-page">
    <div class="wizard-container">
        <AnalysisWizard />
    </div>
</main>

<style>
    .wizard-page {
        padding: 2rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .stepper-container {
        width: 100%;
        max-width: 600px;
        margin-bottom: 2rem;
    }

    .wizard-container {
        width: 100%;
        max-width: 600px;
    }
</style>
