<!-- Header.svelte -->
<script>
    import { onMount } from "svelte";

    let isScrolled = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 0;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header class:scrolled={isScrolled}>
    <div class="logo">LemonSoda</div>
    <nav>
        <!-- <a href="#" class="dropdown">Product ▼</a>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Pages</a>
        <a href="#">Integrations</a>
        <a href="#">Developers</a> -->
    </nav>
    <div class="auth">
        <!-- <a href="#" class="login">Login</a>
        <a href="#" class="cta">Start for free</a> -->
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        transition: background-color 0.3s ease;
    }

    header.scrolled {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
        font-weight: bold;
        font-size: 1.5rem;
    }

    nav {
        display: flex;
        gap: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    .auth {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .cta {
        background-color: #ff6347;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }
</style>
