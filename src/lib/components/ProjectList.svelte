<script>
    export let projects = [];

    // Function to handle card click
    function openProject(project) {
        // Implement the logic to open the project
        // For example, navigate to the project's detail page
        // You can use Svelte's routing or any other method as per your setup
        // Example using $goto if using SvelteKit:
        // import { goto } from '$app/navigation';
        // goto(`/projects/${project.id}`);
        console.log("Opening project:", project);
    }
</script>

<div class="project-list">
    {#each projects as project}
        <div class="project-card" on:click={() => openProject(project)}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <!-- Removed the View Project button -->
        </div>
    {/each}
</div>

<style>
    .project-list {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2rem;
    }

    .project-card {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 2rem;
        width: 350px; /* Increased width for a larger card */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer; /* Changes cursor to pointer on hover */
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .project-card h2 {
        font-size: 2rem; /* Increased font size */
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .project-card p {
        font-size: 1.1rem; /* Increased font size */
        color: #555;
        flex-grow: 1;
    }

    /* Removed .btn-view styles since the button is removed */
</style>
