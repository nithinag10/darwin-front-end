<script>
    import { modalStore, closeModal } from "$lib/stores/modalStore";
    import { addProject } from "$lib/stores/projectsStore";

    let projectName = "";
    let projectDescription = "";

    function handleSubmit() {
        const newProject = {
            name: projectName,
            description: projectDescription || "No description provided.",
            status: "active", // Adding status for metrics
        };
        addProject(newProject);
        closeModal();
        // Reset form fields
        projectName = "";
        projectDescription = "";
    }

    // Close modal on Escape key press
    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }
</script>

{#if $modalStore.showModal}
    <div
        class="modal-overlay"
        on:click={closeModal}
        on:keydown={handleKeyDown}
        tabindex="0"
        role="dialog"
        aria-labelledby="modal-title"
    >
        <div class="modal-content" on:click|stopPropagation>
            <h2 id="modal-title">Create New Project</h2>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="input-group">
                    <label for="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        bind:value={projectName}
                        required
                        placeholder="Enter project name"
                    />
                </div>
                <div class="input-group">
                    <label for="projectDescription">Description:</label>
                    <textarea
                        id="projectDescription"
                        bind:value={projectDescription}
                        placeholder="Enter project description"
                    ></textarea>
                </div>
                <div class="buttons">
                    <!-- Updated Buttons -->
                    <button type="submit" class="btn btn-submit"
                        >Create Project</button
                    >
                    <button
                        type="button"
                        class="btn btn-cancel"
                        on:click={closeModal}>Cancel</button
                    >
                </div>
            </form>
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
        background-color: rgba(26, 42, 87, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    .modal-content {
        background-color: #fff;
        padding: 2.5rem;
        border-radius: 15px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        animation: slideDown 0.3s ease;
    }

    h2 {
        margin-bottom: 1.5rem;
        color: #1a2a57;
        text-align: center;
        font-family: "Fredoka One", cursive;
    }

    .input-group {
        margin-bottom: 1.5rem;
    }

    .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: bold;
    }

    .input-group input,
    .input-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .input-group input:focus,
    .input-group textarea:focus {
        border-color: #ffd100;
        outline: none;
    }

    .input-group textarea {
        resize: vertical;
        min-height: 100px;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    /* Removed local button styles to rely on global styles */

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @media (max-width: 480px) {
        .modal-content {
            padding: 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .btn {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
        }
    }
</style>
