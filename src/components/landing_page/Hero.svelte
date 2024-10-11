<script>
    import { fade, fly } from "svelte/transition";
    import { spring } from "svelte/motion";
    import { onMount } from "svelte";
    import BookDemoModal from "../BookDemoModal.svelte";
    import Toast from "../Toast.svelte";

    let y = spring(0, { stiffness: 0.1, damping: 0.25 });
    let headerHeight = 0;
    let showModal = false;
    let showToast = false;
    let toastMessage = "";

    function vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    onMount(() => {
        const header = document.querySelector("header");
        if (header) {
            headerHeight = header.offsetHeight;
        }
    });

    function openModal() {
        vibrate();
        showToast = true;
        toastMessage = "Opening demo booking...";
        setTimeout(() => {
            showToast = false;
            showModal = true;
        }, 1500);
    }

    function closeModal() {
        showModal = false;
    }
</script>

<section in:fade={{ duration: 800, delay: 300 }}>
    <div class="content">
        <div class="left-column">
            <h1 in:fly={{ y: 20, duration: 600, delay: 500 }}>
                Understand Your Customers Like Never Before—Without Data Burden
            </h1>
            <p in:fly={{ y: 20, duration: 600, delay: 700 }}>
                Our AI agents mimic user emotions and actions, offering a deep
                understanding of customer needs for your product without the
                need for large customer data
            </p>
            <div
                class="cta-container"
                in:fly={{ y: 20, duration: 600, delay: 900 }}
            >
                <a
                    href="#demo"
                    class="cta-button primary"
                    on:mouseenter={() => y.set(-5)}
                    on:mouseleave={() => y.set(0)}
                    style="transform: translateY({$y}px)"
                >
                    See How It Works
                </a>
                <button class="cta-button secondary" on:click={openModal}>
                    Book a Demo Call
                </button>
            </div>
        </div>
        <div class="right-column">
            <div
                class="video-container"
                in:fade={{ duration: 800, delay: 1100 }}
            >
                <iframe
                    src="https://www.canva.com/design/DAGTSEt9a9M/hcCWlbd6EHTH3ViYTnizKg/watch?embed&autoplay=1&loop=1&controls=0&muted=1"
                    allowfullscreen
                    allow="fullscreen"
                    title="Product Demo Video"
                >
                </iframe>
            </div>
        </div>
    </div>
</section>

{#if showModal}
    <BookDemoModal on:close={closeModal} />
{/if}

{#if showToast}
    <Toast message={toastMessage} />
{/if}

<style>
    section {
        background: linear-gradient(135deg, #f7f7f7 0%, #e0e0e0 100%);
        height: 100vh; /* Full viewport height */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        box-sizing: border-box;
        position: relative; /* For absolute positioning of children if needed */
    }

    .content {
        max-width: 1200px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    .left-column {
        flex: 1;
        max-width: 50%;
    }

    .right-column {
        flex: 1;
        max-width: 50%;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }

    .cta-container {
        display: flex;
        gap: 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        border-radius: 50px;
        transition: all 0.3s ease;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;
        border: none;
    }

    .cta-button.primary {
        background-color: #007bff;
        color: white;
        box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
    }

    .cta-button.secondary {
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;
    }

    .video-container {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    @media (max-width: 768px) {
        section {
            height: auto;
            min-height: 100vh;
            padding: 4rem 1rem;
        }

        .content {
            flex-direction: column;
            gap: 2rem;
        }

        .left-column,
        .right-column {
            max-width: 100%;
        }

        h1 {
            font-size: 2rem;
            text-align: center;
        }

        p {
            text-align: center;
        }

        .cta-container {
            flex-direction: column;
            align-items: center;
        }

        .cta-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
        }

        .video-container {
            margin-top: 2rem;
        }
    }
</style>
