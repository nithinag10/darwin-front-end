<script>
    import logoCartoon from "$lib/images/logocartoon.png";
    import { goto } from "$app/navigation";
</script>

<header>
    <div class="container">
        <div class="logo" on:click={() => goto("/")}>
            <img src={logoCartoon} alt="Logo" class="logo-image" />
            <span class="logo-text">LemonSoda<span class="ai">.ai</span></span>
        </div>
        <nav>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/dashboard">Dashboard</a>
            <!-- <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a> -->
        </nav>
    </div>
</header>

<style>
    header {
        background-color: #1a2a57;
        color: #fff;
        padding: 1rem 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer; /* Indicates clickable logo */
    }

    .logo-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    .logo-text {
        color: #ffd100;
        font-size: 1.8rem;
        font-weight: 800;
        letter-spacing: -0.5px;
        transition: all 0.3s ease;
        font-family: "Fredoka One", cursive;
    }

    .ai {
        color: #87ceeb;
    }

    nav {
        display: flex;
        gap: 2rem;
    }

    nav a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        position: relative;
        padding: 0.5rem 1rem;
        border-radius: 25px;
    }

    nav a:hover {
        color: #ffd100;
        background-color: rgba(255, 209, 0, 0.1);
        transform: translateY(-2px);
    }

    nav a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #ffd100;
        transition: width 0.3s ease;
    }

    nav a:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 1rem;
        }

        nav {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
