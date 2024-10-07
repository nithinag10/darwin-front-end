<script>
    import AIPersonaSelection from "../../components/AIPersonaSelection.svelte";
    import { goto } from "$app/navigation";

    function handleSelectPersona(event) {
        // Handle the persona selection
        console.log("Selected persona:", event.detail.persona);
        // Navigate back to the dashboard
        goto("/dashboard");
    }

    function handleBack() {
        // Navigate back to the dashboard
        goto("/dashboard");
    }
</script>

<AIPersonaSelection on:select={handleSelectPersona} on:back={handleBack} />
