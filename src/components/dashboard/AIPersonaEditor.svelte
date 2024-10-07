<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let persona = {
        title: "Tech-Savvy Professional",
        description:
            "Experienced in using modern technology and expects seamless experiences. Values efficiency and innovative solutions.",
        icon: "/path-to-ai-persona-icon.png",
    };

    let editedPersona = { ...persona };

    function handleSave() {
        dispatch("save", editedPersona);
    }

    function handleCancel() {
        dispatch("cancel");
    }
</script>

<div class="card">
    <h2>Edit AI Persona</h2>
    <form on:submit|preventDefault={handleSave}>
        <label>
            Title:
            <input type="text" bind:value={editedPersona.title} required />
        </label>
        <label>
            Description:
            <textarea bind:value={editedPersona.description} required
            ></textarea>
        </label>
        <label>
            Icon URL:
            <input type="text" bind:value={editedPersona.icon} required />
        </label>
        <div class="button-group">
            <button type="submit" class="save-button">Save Changes</button>
            <button type="button" class="cancel-button" on:click={handleCancel}
                >Cancel</button
            >
        </div>
    </form>
</div>

<style>
    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-weight: 600;
        color: #4a5568;
    }

    input,
    textarea {
        padding: 0.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        font-family: "Nunito", sans-serif;
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }

    .button-group {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-weight: 600;
    }

    .save-button {
        background-color: #4299e1;
        color: white;
    }

    .save-button:hover {
        background-color: #3182ce;
    }

    .cancel-button {
        background-color: #e2e8f0;
        color: #4a5568;
    }

    .cancel-button:hover {
        background-color: #cbd5e0;
    }
</style>
