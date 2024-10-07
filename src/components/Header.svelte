<script>
    import logo from "../asset/logo.svg";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let isMenuOpen = false;
    let isMobile = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }

    function navigateToLogin() {
        goto("/login");
    }

    function navigateToDashboard() {
        goto("/dashboard");
    }

    onMount(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    });
</script>

<header>
    <div class="container">
        <img src={logo} alt="LemonSoda.ai Logo" class="logo" />
        {#if isMobile}
            <button class="menu-toggle" on:click={toggleMenu}>
                {isMenuOpen ? "✕" : "☰"}
            </button>
        {/if}
        <nav class:open={isMenuOpen || !isMobile}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#demo">Demo</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</header>

<style>
    header {
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        padding: 1rem 0;
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        flex-wrap: wrap; /* Allow wrapping */
    }

    .logo {
        height: 2.5rem;
    }

    nav {
        display: flex;
        gap: 2.5rem;
        align-items: center;
        flex-wrap: wrap; /* Allow wrapping */
    }

    a {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        transition: color 0.3s ease;
    }

    a:hover {
        color: #007bff;
    }

    .cta-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    .cta-button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    .menu-toggle {
        display: none;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        nav {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
        }

        a {
            width: 100%;
            padding: 0.5rem 0;
        }

        .cta-button {
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
        }
    }
</style>
