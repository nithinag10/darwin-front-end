<script>
    import logoCartoon from "$lib/images/logocartoon.png";
    let email = "";
    let showPopup = false;
    let showThankYou = false;

    function handleSubmit() {
        // Handle newsletter signup
        console.log("Newsletter signup:", email);
        email = "";
    }

    function openJoinUsPopup() {
        showPopup = true;
        showThankYou = false;
    }

    function closePopup() {
        showPopup = false;
        showThankYou = false;
    }

    async function handleJoinUs() {
        const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdv9UEpJ1Sy3SXnJSU2xhW5obOfk_aX_yu27cXLaO_vJIzPPw/formResponse?&submit=Submit?usp=pp_url&entry.1053862427=${encodeURIComponent(email)}`;

        try {
            const response = await fetch(formUrl, {
                method: "POST",
                mode: "no-cors",
            });
            showThankYou = true;
            email = "";
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
</script>

<footer>
    <div class="footer-separator"></div>
    <div class="footer-content">
        <div class="footer-section logo-section">
            <img
                src={logoCartoon}
                alt="LemonSoda.ai Logo"
                class="footer-logo"
            />
            <p>
                Squeeze the most out of your product insights with LemonSoda.ai
            </p>
        </div>
        <div class="footer-links">
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/nithin-a-54700691/"
                            target="_blank"
                            rel="noopener noreferrer">About Us</a
                        >
                    </li>
                    <li>
                        <a href="#" on:click|preventDefault={openJoinUsPopup}
                            >Join Us</a
                        >
                    </li>
                </ul>
            </div>
            <!-- <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/docs">Documentation</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </div> -->
            <!-- <div class="footer-section">
                <h3>Legal</h3>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div> -->
        </div>
        <div class="footer-section newsletter">
            <h3>Stay Zesty</h3>
            <form on:submit|preventDefault={handleSubmit}>
                <input
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                    aria-label="Email for newsletter"
                />
                <button type="submit" class="btn-small">Subscribe</button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 LemonSoda.ai. All rights reserved.</p>
        <a href="#top" class="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up"></i>
        </a>
    </div>
</footer>

{#if showPopup}
    <div class="popup-overlay" on:click={closePopup}>
        <div class="popup" on:click|stopPropagation>
            {#if showThankYou}
                <h3>Thank You!</h3>
                <p>
                    We appreciate your interest in joining our zesty team. We'll
                    be in touch soon with more information about LemonSoda.ai
                    and potential opportunities.
                </p>
                <button class="btn-small" on:click={closePopup}>Close</button>
            {:else}
                <h3>Join Our Zesty Team!</h3>
                <p>If you like what we're building, let's connect!</p>
                <form on:submit|preventDefault={handleJoinUs}>
                    <input
                        type="email"
                        bind:value={email}
                        placeholder="Enter your email"
                        aria-label="Email to join us"
                        required
                    />
                    <button type="submit" class="btn-small"
                        >Let's Connect</button
                    >
                </form>
            {/if}
            <button class="close-btn" on:click={closePopup}>×</button>
        </div>
    </div>
{/if}

<style>
    footer {
        background-color: #1a2a57;
        color: #fff9e6;
        padding: 3rem 2rem 1rem;
        position: relative;
    }

    .footer-separator {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(to right, #ffd100, #ff6b35);
    }

    .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }

    .footer-section {
        flex: 1;
        min-width: 200px;
        margin-bottom: 2rem;
    }

    .logo-section {
        flex: 2;
        max-width: 300px;
    }

    .footer-logo {
        width: 100%;
        max-width: 200px;
        height: auto;
        margin-bottom: 1rem;
    }

    .footer-links {
        display: flex;
        flex: 3;
        justify-content: space-around;
    }

    h3 {
        color: #ffd100;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: #fff9e6;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    a:hover {
        color: #ffd100;
    }

    .newsletter form {
        display: flex;
        margin-bottom: 1rem;
    }

    input[type="email"] {
        flex-grow: 1;
        padding: 0.5rem;
        border: none;
        border-radius: 4px 0 0 4px;
    }

    .btn-small {
        background-color: #ffd100;
        color: #1a2a57;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-small:hover {
        background-color: #ffe666;
    }

    .footer-bottom {
        border-top: 1px solid rgba(255, 209, 0, 0.3);
        padding-top: 1rem;
        margin-top: 2rem;
        text-align: center;
        position: relative;
    }

    .back-to-top {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ffd100;
        color: #1a2a57;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .back-to-top:hover {
        background-color: #ffe666;
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
        }

        .footer-links {
            flex-direction: column;
        }

        .footer-section {
            margin-bottom: 2rem;
        }

        .back-to-top {
            position: static;
            margin: 1rem auto 0;
        }
    }

    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup {
        background-color: #fff9e6;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 400px;
        width: 90%;
    }

    .popup h3 {
        color: #1a2a57;
        margin-bottom: 1rem;
    }

    .popup p {
        color: #1a2a57;
        margin-bottom: 1rem;
        line-height: 1.6;
    }

    .popup form {
        display: flex;
        flex-direction: column;
    }

    .popup input[type="email"] {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid #1a2a57;
        border-radius: 4px;
    }

    .popup .btn-small {
        align-self: flex-start;
        margin-top: 1rem;
    }

    .close-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #1a2a57;
    }
</style>
