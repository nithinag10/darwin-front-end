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

<div class="onboard-step">
    <h2>
        {$userStore.hasOnboarded
            ? "Edit Product Details"
            : "Onboard Your Product"}
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
        <div class="form-group">
            <label for="figma-file-key"
                >Figma File Key: <span class="required">*</span></label
            >
            <input
                type="text"
                id="figma-file-key"
                bind:value={figmaFileKey}
                required
            />
        </div>
        <div class="form-group">
            <label for="figma-access-token"
                >Figma Access Token: <span class="required">*</span></label
            >
            <input
                type="text"
                id="figma-access-token"
                bind:value={figmaAccessToken}
                required
            />
        </div>
        <div class="form-group">
            <label for="product-landing-page-url"
                >Product Landing Page URL: <span class="required">*</span
                ></label
            >
            <input
                type="text"
                id="product-landing-page-url"
                bind:value={productLandingPageUrl}
                required
            />
        </div>
        <div class="form-group">
            <label for="custom-product-information">
                Custom Product Information:
                <span class="optional">(Optional)</span>
            </label>
            <textarea
                id="custom-product-information"
                bind:value={customProductInformation}
                rows="6"
                placeholder="Enter any additional information about your product here..."
            ></textarea>
        </div>
        <div class="buttons">
            <button type="submit" class="btn btn-submit">Next</button>
        </div>
    </form>
</div>

<style>
    .onboard-step {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
        color: #1a2a57;
        margin-bottom: 1.5rem;
        text-align: center;
        font-family: "Fredoka One", cursive;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #333;
        font-family: "Nunito", sans-serif;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        font-family: "Nunito", sans-serif;
        transition: border-color 0.3s ease;
    }

    input[type="text"]:focus,
    textarea:focus {
        outline: none;
        border-color: #ffd100;
        box-shadow: 0 0 0 2px rgba(255, 209, 0, 0.2);
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .btn-submit {
        background-color: #ffd100;
        color: #1a2a57;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: "Nunito", sans-serif;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .btn-submit:hover {
        background-color: #ffe666;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    .required {
        color: #dc3545;
        margin-left: 4px;
    }

    .optional {
        color: #6c757d;
        font-size: 0.9em;
        font-weight: normal;
        margin-left: 4px;
    }
</style>
