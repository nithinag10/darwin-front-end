<script>
    import { createEventDispatcher } from "svelte";
    import { userStore } from "$lib/stores/userStore";

    const dispatch = createEventDispatcher();

    let figmaFileKey = "";
    let figmaAccessToken = "";
    let productLandingPageUrl = "";
    let customProductInformation = "";

    // Pre-fill form if user has onboarded
    $: {
        $userStore.hasOnboarded && (figmaFileKey = $userStore.figmaFileKey);
        $userStore.hasOnboarded &&
            (figmaAccessToken = $userStore.figmaAccessToken);
        $userStore.hasOnboarded &&
            (productLandingPageUrl = $userStore.productLandingPageUrl);
        $userStore.hasOnboarded &&
            (customProductInformation = $userStore.customProductInformation);
    }
</script>

<h2>
    {$userStore.hasOnboarded ? "Edit Product Details" : "Onboard Your Product"}
</h2>

<form
    on:submit|preventDefault={() =>
        dispatch("next", {
            figmaFileKey,
            figmaAccessToken,
            productLandingPageUrl,
            customProductInformation,
        })}
>
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
    <div>
        <label for="product-landing-page-url">Product Landing Page URL:</label>
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
            required
        ></textarea>
    </div>
    <div class="buttons">
        <button type="submit" class="btn btn-submit">Next</button>
    </div>
</form>

<style>
    h2 {
        color: #1a2a57;
        margin-bottom: 1rem;
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
</style>
