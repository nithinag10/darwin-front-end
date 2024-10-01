<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import NewProjectModal from "$lib/components/NewProjectModal.svelte";
    import OnboardingModal from "$lib/components/OnboardingModal.svelte";
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<!-- Include Header -->
<Header />

<!-- Main Content Slot Wrapped in a Div with Padding -->
<div class="content">
    <slot />
</div>

<!-- Include Modals -->
<NewProjectModal />
<OnboardingModal />

<!-- Include Footer -->
<Footer />

<style>
    :global(body) {
        font-family: "Nunito", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff9e6;
        color: #1a2a57;
    }

    :global(*) {
        box-sizing: inherit;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Fredoka One", cursive;
        margin: 0;
    }

    /* Global Button Styles */
    :global(.btn) {
        background-color: #ffd100;
        color: #1a2a57;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 0 15px rgba(255, 209, 0, 0.3);
        border: none;
        cursor: pointer;
    }

    :global(.btn:hover) {
        background-color: #ffe666;
        transform: translateY(-2px);
        box-shadow:
            0 6px 10px rgba(0, 0, 0, 0.15),
            0 0 20px rgba(255, 209, 0, 0.5);
    }

    /* Modifier Classes */
    :global(.btn-submit) {
        background-color: #28a745;
        color: white;
    }

    :global(.btn-submit:hover) {
        background-color: #218838;
    }

    :global(.btn-cancel) {
        background-color: #dc3545;
        color: white;
    }

    :global(.btn-cancel:hover) {
        background-color: #c82333;
    }

    :global(.btn-view) {
        background-color: #007bff;
        color: white;
    }

    :global(.btn-view:hover) {
        background-color: #0056b3;
    }

    /* Section Styles */
    :global(.section) {
        margin-bottom: 4rem;
        border-radius: 40px;
        overflow: hidden;
    }

    /* Card Styles */
    :global(.card) {
        background-color: white;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        transition: all 0.3s ease;
    }

    :global(.card:hover) {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    /* Accent Text */
    :global(.accent-text) {
        color: #ff6b35;
    }

    /* Responsive Design */
    .content {
        padding-top: 80px; /* Adjust based on Header height */
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (max-width: 768px) {
        .content {
            padding-top: 80px; /* Ensure consistency on smaller screens */
            padding: 1rem;
        }

        :global(.section) {
            border-radius: 30px;
        }
    }
</style>
