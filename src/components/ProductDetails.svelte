<script>
    import { createEventDispatcher } from "svelte";
    import InfoIcon from "./InfoIcon.svelte";

    const dispatch = createEventDispatcher();

    let productName = "";
    let productDescription = "";
    let websiteUrl = "";
    let figmaApiKey = "";
    let figmaFileName = "";
    let platform = "";
    let technicalConstraints = "";
    let brandValues = "";

    function saveProductDetails() {
        // Implement save logic here
        dispatch("save", {
            productName,
            productDescription,
            websiteUrl,
            figmaApiKey,
            figmaFileName,
            platform,
            technicalConstraints,
            brandValues,
        });
    }

    function showInfo(message) {
        // Implement info tooltip logic here
        alert(message); // Replace with a more sophisticated tooltip
    }
</script>

<main class="product-details">
    <div class="container">
        <h1>Enter Your Product Details</h1>
        <p class="description">
            Provide your product information to enable our AI agents to simulate
            user interactions and deliver actionable insights.
        </p>

        <div class="form-grid">
            <div class="form-section">
                <h2>Basic Information</h2>
                <div class="form-field">
                    <label for="productName">Product Name</label>
                    <input
                        id="productName"
                        type="text"
                        bind:value={productName}
                        placeholder="Enter product name"
                    />
                </div>
                <div class="form-field">
                    <label for="productDescription">Product Description</label>
                    <textarea
                        id="productDescription"
                        bind:value={productDescription}
                        placeholder="Briefly describe your product"
                    ></textarea>
                </div>
                <div class="form-field">
                    <label for="websiteUrl">
                        Official Website URL
                        <InfoIcon
                            on:click={() =>
                                showInfo(
                                    "We use this to understand your business and what it does.",
                                )}
                        />
                    </label>
                    <input
                        id="websiteUrl"
                        type="url"
                        bind:value={websiteUrl}
                        placeholder="https://example.com"
                    />
                </div>
                <div class="form-field">
                    <label for="figmaApiKey">
                        Figma API Key
                        <InfoIcon
                            on:click={() =>
                                showInfo(
                                    "We use Figma to understand the flow and input working of your application.",
                                )}
                        />
                    </label>
                    <input
                        id="figmaApiKey"
                        type="text"
                        bind:value={figmaApiKey}
                        placeholder="Enter Figma API key"
                    />
                </div>
                <div class="form-field">
                    <label for="figmaFileName">Figma File Name</label>
                    <input
                        id="figmaFileName"
                        type="text"
                        bind:value={figmaFileName}
                        placeholder="Enter Figma file name"
                    />
                </div>
                <p class="note">
                    We'll support Adobe XD and other design tools in the future.
                </p>
            </div>

            <div class="form-section">
                <h2>Technical Specifications</h2>
                <div class="form-field">
                    <label for="platform">Platform</label>
                    <select id="platform" bind:value={platform}>
                        <option value="">Select platform</option>
                        <option value="web">Web-based</option>
                        <option value="ios">iOS App</option>
                        <option value="android">Android App</option>
                        <option value="multi">Multi-platform</option>
                    </select>
                </div>
                <div class="form-field">
                    <label for="technicalConstraints"
                        >Technical Constraints</label
                    >
                    <textarea
                        id="technicalConstraints"
                        bind:value={technicalConstraints}
                        placeholder="Describe any limitations or specific technologies used"
                    ></textarea>
                </div>
            </div>

            <div class="form-section">
                <h2>Branding Guidelines</h2>
                <div class="form-field">
                    <label for="brandValues">Brand Values</label>
                    <textarea
                        id="brandValues"
                        bind:value={brandValues}
                        placeholder="Describe your core brand values and messaging"
                    ></textarea>
                </div>
            </div>
        </div>

        <button class="save-button" on:click={saveProductDetails}
            >Save Product Details</button
        >
    </div>
</main>

<style>
    .product-details {
        background-color: #f8fafc;
        padding: 3rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h1 {
        font-family: "Playfair Display", serif;
        font-size: 2.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
        text-align: center;
    }

    .description {
        text-align: center;
        color: #4a5568;
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }

    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .form-section {
        background-color: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
        border-bottom: 2px solid #4299e1;
        padding-bottom: 0.5rem;
    }

    .form-field {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        font-weight: 600;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    input,
    textarea,
    select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        font-size: 1rem;
    }

    textarea {
        min-height: 100px;
    }

    .note {
        font-size: 0.9rem;
        color: #718096;
        font-style: italic;
    }

    .save-button {
        display: block;
        width: 100%;
        max-width: 300px;
        margin: 2rem auto 0;
        padding: 0.75rem;
        background-color: #4299e1;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .save-button:hover {
        background-color: #3182ce;
    }
</style>
