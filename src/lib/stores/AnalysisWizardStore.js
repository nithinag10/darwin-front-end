import { writable } from 'svelte/store';

export const AnalysisWizardStore = writable({
    currentStep: 1
});
