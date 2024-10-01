<script>
    import { modalStore } from "$lib/stores/modalStore";
    import {
        userStore,
        fetchUserData,
        updateUserData,
    } from "$lib/stores/userStore";
    import { onMount, onDestroy } from "svelte";

    let showModal = false;
    let user = {};
    let isLoading = true;
    let isEditing = false;

    // Form fields
    let figmaFileKey = "";
    let figmaAccessToken = "";
    let productLandingPageUrl = "";
    let customProductInformation = "";

    // Subscribe to modalStore to control modal visibility
    const unsubscribe = modalStore.subscribe(async (value) => {
        showModal = value.showModal && value.modalType === "onboarding";
        if (showModal) {
            await initializeForm();
        }
    });

    /**
     * Initialize form fields based on user data.
     */
    async function initializeForm() {
        isLoading = true;
        user = await fetchUserData();
        figmaFileKey = user.figmaFileKey;
        figmaAccessToken = user.figmaAccessToken;
        productLandingPageUrl = user.productLandingPageUrl;
        customProductInformation = user.customProductInformation;
        isEditing = user.hasOnboarded;
        isLoading = false;
    }

    /**
     * Handle form submission to update user data.
     */
    async function handleSubmit() {
        isLoading = true;
        await updateUserData({
            figmaFileKey,
            figmaAccessToken,
            productLandingPageUrl,
            customProductInformation,
        });
        isLoading = false;
        closeModal();
    }

    /**
     * Close the modal.
     */
    function closeModal() {
        modalStore.set({ showModal: false, modalType: null });
    }

    // Cleanup subscription on component destroy
    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if showModal}
    <div class="modal-overlay" on:click|self={closeModal}>
        <div class="modal-content">
            <h2>
                {isEditing
                    ? "Do you want to edit the details?"
                    : "Onboard Your Product"}
            </h2>
            <form on:submit|preventDefault={handleSubmit}>
                <div>
                    <label for="figma-file-key">Figma File Key:</label>
                    <input
                        type="text"
                        id="figma-file-key"
                        bind:value={figmaFileKey}
                        required
                    />
                </div>
                <div>
                    <label for="figma-access-token">Figma Access Token:</label>
                    <input
                        type="text"
                        id="figma-access-token"
                        bind:value={figmaAccessToken}
                        required
                    />
                </div>
                <div class="coming-soon">
                    Coming Soon: Adobe XD and other design tool integrations
                </div>
                <div>
                    <label for="product-landing-page-url"
                        >Product Landing Page URL:</label
                    >
                    <input
                        type="text"
                        id="product-landing-page-url"
                        bind:value={productLandingPageUrl}
                        required
                    />
                </div>
                <div>
                    <label for="custom-product-information"
                        >Custom Product Information:</label
                    >
                    <textarea
                        id="custom-product-information"
                        bind:value={customProductInformation}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div class="buttons">
                    <button
                        type="submit"
                        class="btn-submit"
                        disabled={isLoading}
                    >
                        {isEditing ? "Update Details" : "Start Analysis"}
                    </button>
                    <button
                        type="button"
                        class="btn-cancel"
                        on:click={closeModal}
                        disabled={isLoading}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(26, 42, 87, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    }

    .modal-content {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    h2 {
        margin-bottom: 1.5rem;
        color: #1a2a57;
        text-align: center;
    }

    form div {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #333;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }

    .coming-soon {
        background-color: #f1f1f1;
        padding: 0.75rem;
        font-size: 0.95rem;
        color: #888;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 1rem;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .btn-submit {
        background-color: #28a745;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-submit:hover {
        background-color: #218838;
    }

    .btn-cancel {
        background-color: #dc3545;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-cancel:hover {
        background-color: #c82333;
    }
</style>
