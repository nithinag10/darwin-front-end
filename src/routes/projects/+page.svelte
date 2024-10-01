<script>
    import { onMount } from "svelte";
    import ProjectList from "$lib/components/ProjectList.svelte";
    import NewProjectModal from "$lib/components/NewProjectModal.svelte";
    import { showModal } from "$lib/stores/modalStore";
    import { projectsStore, loadProjects } from "$lib/stores/projectsStore";

    let projects = [];

    onMount(() => {
        loadProjects();
        const unsubscribe = projectsStore.subscribe((value) => {
            projects = value;
        });
        return () => unsubscribe();
    });

    function openNewProjectModal() {
        showModal("newProject"); // Specify modal type
    }
</script>

<main>
    <h1>My Projects</h1>
    <button class="btn" on:click={openNewProjectModal}>New Project</button>
    <ProjectList {projects} />
    <NewProjectModal />
</main>

<style>
    main {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .btn {
        background-color: #007bff;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #0056b3;
    }
</style>
