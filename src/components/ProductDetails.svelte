<script>
    import { createEventDispatcher } from "svelte";
    import InfoIcon from "./InfoIcon.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

    const dispatch = createEventDispatcher();

    let productName = "";
    let productDescription = "";
    let productCategory = "";
    let websiteUrl = "";
    let figmaApiKey = "";
    let figmaFileName = "";
    let platform = "";
    let brandValues = "";
    let emotionalGoals = [];
    let additionalInfo = "";

    const categories = [
        "Technology",
        "Retail",
        "Healthcare",
        "Finance",
        "Education",
        "Other",
    ];
    const platformOptions = [
        "Web-based",
        "iOS App",
        "Android App",
        "Multi-platform",
    ];
    const emotionalGoalOptions = [
        "Trust",
        "Excitement",
        "Reliability",
        "Comfort",
        "Innovation",
        "Simplicity",
    ];

    function saveProductDetails() {
        dispatch("save", {
            productName,
            productDescription,
            productCategory,
            websiteUrl,
            figmaApiKey,
            figmaFileName,
            platform,
            brandValues,
            emotionalGoals,
            additionalInfo,
        });
    }

    function showInfo(message) {
        alert(message); // Replace with a more sophisticated tooltip
    }
</script>

<Header />

<main class="product-details">
    <div class="container">
        <h1>Enter Your <span class="highlight">Product Details</span></h1>
        <div class="subheader">
            <div class="line"></div>
            <p class="description">
                Enhance AI simulations with accurate product information
            </p>
            <div class="line"></div>
        </div>

        <form on:submit|preventDefault={saveProductDetails}>
            <div class="card-grid">
                <div class="card">
                    <h2>Basic Information</h2>
                    <div class="form-field">
                        <label for="productName">Product Name</label>
                        <input
                            id="productName"
                            type="text"
                            bind:value={productName}
                            placeholder="Enter product name"
                            required
                        />
                    </div>
                    <div class="form-field">
                        <label for="productDescription"
                            >Product Description</label
                        >
                        <textarea
                            id="productDescription"
                            bind:value={productDescription}
                            placeholder="Briefly describe your product"
                            required
                        ></textarea>
                    </div>
                    <div class="form-field">
                        <label for="productCategory"
                            >Product Category/Industry</label
                        >
                        <select
                            id="productCategory"
                            bind:value={productCategory}
                            required
                        >
                            <option value="">Select a category</option>
                            {#each categories as category}
                                <option value={category}>{category}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="form-field">
                        <label for="websiteUrl">
                            Website URL
                            <InfoIcon
                                message="Enter the URL of your product's website or application."
                            />
                        </label>
                        <input
                            id="websiteUrl"
                            type="url"
                            bind:value={websiteUrl}
                            placeholder="https://example.com"
                            required
                        />
                    </div>
                </div>

                <div class="card design-integration">
                    <h2>Design Integration</h2>
                    <p class="card-description">
                        Connect your Figma designs to LemonSoda for better AI
                        understanding of your product's features and working in
                        depth.
                    </p>
                    <div class="security-note">
                        <strong>🔒 Your security is our priority:</strong> We use
                        industry-standard encryption to protect your API key.
                    </div>
                    <div class="form-field">
                        <label for="figmaApiKey">
                            Figma API Key
                            <InfoIcon
                                message="Your Figma API key allows secure, read-only access to your design file."
                            />
                        </label>
                        <input
                            id="figmaApiKey"
                            type="password"
                            bind:value={figmaApiKey}
                            placeholder="Enter your Figma API key"
                        />
                    </div>
                    <div class="form-field">
                        <label for="figmaFileName">
                            Figma File Name
                            <InfoIcon
                                message="Enter the name of your Figma file for this product."
                            />
                        </label>
                        <input
                            id="figmaFileName"
                            type="text"
                            bind:value={figmaFileName}
                            placeholder="Enter your Figma file name"
                        />
                    </div>
                </div>

                <div class="card platform-brand">
                    <h2>Platform & Brand</h2>
                    <div class="form-field">
                        <label for="platform">Platform</label>
                        <select id="platform" bind:value={platform} required>
                            <option value="">Select a platform</option>
                            {#each platformOptions as option}
                                <option value={option}>{option}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="form-field">
                        <label for="brandValues">Brand Values</label>
                        <textarea
                            id="brandValues"
                            bind:value={brandValues}
                            placeholder="Describe your brand values"
                        ></textarea>
                    </div>
                    <div class="form-field">
                        <label>Emotional Goals</label>
                        <div class="checkbox-group">
                            {#each emotionalGoalOptions as goal}
                                <label class="checkbox-label">
                                    <input
                                        type="checkbox"
                                        bind:group={emotionalGoals}
                                        value={goal}
                                    />
                                    {goal}
                                </label>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>

            <div class="card additional-info">
                <h2>Additional Information</h2>
                <div class="form-field">
                    <label for="additionalInfo">Additional Notes</label>
                    <textarea
                        id="additionalInfo"
                        bind:value={additionalInfo}
                        placeholder="Any other relevant information"
                    ></textarea>
                </div>
            </div>

            <button type="submit" class="save-button"
                >Save Product Details</button
            >
        </form>
    </div>
</main>

<Footer />

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
        font-size: 3rem;
        color: #2d3748;
        margin-bottom: 1rem;
        line-height: 1.2;
        text-align: center;
    }

    .highlight {
        color: #4299e1;
        position: relative;
        display: inline-block;
    }

    .highlight::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #4299e1;
        border-radius: 2px;
    }

    .subheader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 3rem;
    }

    .line {
        flex-grow: 1;
        height: 1px;
        background-color: #cbd5e0;
        max-width: 100px;
    }

    .description {
        color: #718096;
        font-size: 1.1rem;
        margin: 0 1rem;
        font-style: italic;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .card {
        background-color: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .card h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #4299e1;
        padding-bottom: 0.5rem;
        align-self: flex-start;
    }

    .card-description {
        font-size: 0.9rem;
        color: #718096;
        margin-bottom: 1rem;
    }

    .security-note {
        background-color: #e6fffa;
        border-left: 4px solid #38b2ac;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        font-size: 0.9rem;
        color: #2c7a7b;
    }

    .form-field {
        margin-bottom: 1.5rem;
        padding-right: 1rem;
    }

    .form-field:last-child {
        margin-bottom: 0;
    }

    label {
        display: block;
        font-weight: 600;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    input,
    select,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-family: "Nunito", sans-serif;
        font-size: 1rem;
        color: #4a5568;
        transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
    }

    input:focus,
    select:focus,
    textarea:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }

    .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.75rem;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        font-weight: normal;
    }

    .checkbox-label input {
        margin-right: 0.5rem;
        width: auto;
    }

    .save-button {
        display: block;
        width: 100%;
        max-width: 300px;
        margin: 2rem auto 0;
        padding: 1rem;
        background-color: #4299e1;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .save-button:hover {
        background-color: #3182ce;
    }

    .additional-info {
        grid-column: 1 / -1;
    }

    .additional-info-content {
        display: flex;
        flex-direction: column;
    }

    .additional-info .form-field {
        flex: 1;
    }

    @media (max-width: 768px) {
        .card-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
