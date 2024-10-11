<script>
    import { fade, fly } from "svelte/transition";
    import { spring } from "svelte/motion";
    import BookDemoModal from "../BookDemoModal.svelte";

    let y = spring(0, { stiffness: 0.1, damping: 0.25 });
    let showModal = false;

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }

    function vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    function handleBookDemo() {
        vibrate();
        openModal();
    }
</script>

<section id="future-focused" in:fade={{ duration: 800, delay: 300 }}>
    <div class="content">
        <h2 in:fly={{ y: 20, duration: 600, delay: 500 }}>
            Move from Problems to Progress: Save Development Time
        </h2>
        <div class="card-container">
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 700 }}>
                <div class="icon">🔍</div>
                <h3>Discover Pain Points</h3>
                <p>Uncover issues before they become problems.</p>
            </div>
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 900 }}>
                <div class="icon">🎫</div>
                <h3>Generate Expert Tickets</h3>
                <p>
                    Turn user frustrations into actionable development tickets.
                </p>
                <p class="subtext">
                    Each ticket includes insights based on emotional analysis,
                    highlighting priority features within your business
                    constraints.
                </p>
            </div>
            <div class="card" in:fly={{ y: 20, duration: 600, delay: 1100 }}>
                <div class="icon">💰</div>
                <h3>Save Resources</h3>
                <p>Eliminate non-essential features and focus on real value.</p>
                <p class="subtext">
                    Save development time and keep costs under control by
                    prioritizing impactful improvements.
                </p>
            </div>
        </div>
    </div>
</section>

<div class="cta-strip" in:fade={{ duration: 800, delay: 1300 }}>
    <div class="cta-content">
        <h3>Be One of the First to Experience This New Market Innovation!</h3>
        <p>
            Join a select group of early customers and book your slot to explore
            our unique solution.
        </p>
    </div>
    <button
        on:mouseenter={() => y.set(-5)}
        on:mouseleave={() => y.set(0)}
        on:click={handleBookDemo}
        style="transform: translateY({$y}px)"
    >
        Book Demo Today
    </button>
</div>

{#if showModal}
    <BookDemoModal on:close={closeModal} />
{/if}

<style>
    section {
        background-color: #f8f9fa;
        padding: 4rem 2rem;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        font-family: "Lora", serif;
        font-size: 2.5rem;
        color: #333333;
        margin-bottom: 2rem;
    }

    .card-container {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .card {
        flex: 1;
        background-color: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #007bff, #00c6ff);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .card:hover::before {
        opacity: 0.1;
    }

    .card > * {
        position: relative;
        z-index: 2;
    }

    .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
    }

    .card:hover .icon {
        transform: scale(1.1);
    }

    h3 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: #333333;
        margin-bottom: 1rem;
        transition: color 0.3s ease;
    }

    .card:hover h3 {
        color: #007bff;
    }

    p {
        font-size: 1rem;
        color: #555555;
        margin-bottom: 1rem;
        transition: color 0.3s ease;
    }

    .card:hover p {
        color: #333333;
    }

    .subtext {
        font-size: 0.9rem;
        color: #777777;
    }

    .cta-strip {
        background-color: #007bff;
        color: white;
        padding: 2rem 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cta-content {
        text-align: left;
    }

    .cta-content h3 {
        color: white;
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }

    .cta-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1rem;
        margin-bottom: 0;
    }

    button {
        background-color: white;
        color: #007bff;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: #f8f9fa;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    @media (max-width: 968px) {
        .card-container {
            flex-direction: column;
        }

        .card {
            margin-bottom: 1rem;
        }

        .cta-strip {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
        }

        .cta-content {
            text-align: center;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.9rem;
        }

        button {
            font-size: 1rem;
            padding: 0.6rem 1.2rem;
        }
    }
</style>
