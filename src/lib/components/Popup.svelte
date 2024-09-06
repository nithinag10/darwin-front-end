<script>
    import {
        popupStore,
        closePopup,
        handleSubmit,
    } from "$lib/stores/popupStore";

    $: ({ showPopup, showThankYou, email, feedback } = $popupStore);

    function onSubmit() {
        console.log("Submitting form with:", { email, feedback });
        handleSubmit();
    }
</script>

{#if showPopup}
    <div class="popup-overlay" on:click={closePopup}>
        <div class="popup" on:click|stopPropagation>
            <div class="popup-header">
                <h2>Exciting Times Ahead!</h2>
                <button class="close-btn" on:click={closePopup}>×</button>
            </div>
            {#if showThankYou}
                <div class="popup-content thank-you">
                    <img
                        src="/images/thank-you-icon.svg"
                        alt="Thank you"
                        class="thank-you-icon"
                    />
                    <p>
                        We appreciate your interest! We'll keep you updated on
                        our progress and exciting developments at LemonSoda.ai.
                    </p>
                    <button class="btn-small" on:click={closePopup}
                        >Close</button
                    >
                </div>
            {:else}
                <div class="popup-content">
                    <p>
                        We're still brewing the perfect blend of AI and user
                        insights, but we need your zest to make it
                        extraordinary! Be part of our journey and help shape the
                        future of product validation.
                    </p>
                    <form on:submit|preventDefault={onSubmit}>
                        <div class="input-group">
                            <label for="email">Your email (required)</label>
                            <input
                                type="email"
                                id="email"
                                bind:value={$popupStore.email}
                                required
                            />
                        </div>
                        <div class="input-group">
                            <label for="feedback"
                                >Any thoughts or feedback? (optional)</label
                            >
                            <textarea
                                id="feedback"
                                bind:value={$popupStore.feedback}
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" class="btn-small"
                            >Join the Adventure</button
                        >
                    </form>
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(26, 42, 87, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup {
        background-color: #fff9e6;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        max-width: 500px;
        width: 90%;
        overflow: hidden;
    }

    .popup-header {
        background-color: #ffd100;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .popup-header h2 {
        color: #1a2a57;
        margin: 0;
        font-size: 1.8rem;
    }

    .popup-content {
        padding: 2rem;
    }

    .input-group {
        margin-bottom: 1.5rem;
    }

    .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #1a2a57;
        font-weight: 600;
    }

    .popup input,
    .popup textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #1a2a57;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .btn-small {
        background-color: #ffd100;
        color: #1a2a57;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #1a2a57;
        transition: color 0.3s ease;
    }

    .thank-you {
        text-align: center;
    }

    .thank-you-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 1rem;
    }
</style>
