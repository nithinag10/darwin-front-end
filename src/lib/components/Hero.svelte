<script>
    import { openPopup } from "$lib/stores/popupStore";
</script>

<section class="hero">
    <div class="container">
        <h1>
            Is Your Product <span class="highlight">Blind</span> to User Needs?
        </h1>
        <p>Uncover Hidden Insights with AI-Agent User Simulation</p>
        <button class="btn hero-btn" on:click={openPopup}>
            Reveal User Perspectives
        </button>
    </div>
</section>

<style>
    .hero {
        background-color: #87ceeb;
        color: #1a2a57;
        padding: 12rem 0 8rem;
        text-align: center;
        background-image: linear-gradient(
                rgba(26, 42, 87, 0.7),
                rgba(26, 42, 87, 0.7)
            ),
            url("$lib/images/background_image.png");
        background-size: 75% auto;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 2;
    }

    h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        font-family: "Fredoka One", cursive;
    }

    .highlight {
        color: #ffff00;
        position: relative;
        display: inline-block;
    }

    p {
        font-size: 1.4rem;
        margin-bottom: 2.5rem;
        opacity: 0.9;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    .hero-btn {
        font-size: 1.2rem;
        padding: 1rem 2rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .hero-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(255, 209, 0, 0.4);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.2rem;
        }

        .hero-btn {
            font-size: 1rem;
            padding: 0.8rem 1.6rem;
        }
    }
</style>
