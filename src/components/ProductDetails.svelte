<script>
    import { createEventDispatcher } from "svelte";
    import Footer from "./Footer.svelte";
    import { selectedPersona } from "../stores/personaStore.js"; // We'll create this store
    import ValidationResults from "./ValidationResults.svelte";

    const dispatch = createEventDispatcher();

    let businessIdea = "";
    let validationResult = null;
    const maxCharacters = 250;

    $: remainingCharacters = maxCharacters - businessIdea.length;

    async function validateBusinessIdea() {
        try {
            const response = await fetch(
                "https://web-aca-app.ambitiousplant-60435fdc.westus2.azurecontainerapps.io/create-persona-chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        persona: $selectedPersona,
                        businessIdea: businessIdea,
                    }),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to validate idea");
            }

            validationResult = await response.json();
            console.log("Validation result:", validationResult);
            dispatch("validationComplete", validationResult);
        } catch (error) {
            console.error("Error validating business idea:", error);
            // Handle the error appropriately, e.g., show an error message to the user
        }
    }
</script>

<main class="product-details">
    <div class="container">
        {#if !validationResult}
            <h1>Describe Your <span class="highlight">Business Idea</span></h1>
            <div class="subheader">
                <div class="line"></div>
                <p class="description">Tell us about your product or service</p>
                <div class="line"></div>
            </div>

            <form on:submit|preventDefault={validateBusinessIdea}>
                <div class="card">
                    <h2>Business Idea</h2>
                    <div class="form-field">
                        <label for="businessIdea"
                            >Describe your business idea in detail</label
                        >
                        <textarea
                            id="businessIdea"
                            bind:value={businessIdea}
                            maxlength={maxCharacters}
                            placeholder="Enter your business idea, product description, target audience, and any other relevant details..."
                            required
                        ></textarea>
                        <div class="character-count">
                            {remainingCharacters}
                        </div>
                    </div>
                </div>

                <div class="card coming-soon">
                    <h2>Design Integration</h2>
                    <p class="card-description">
                        Coming Soon: Connect your Figma designs to LemonSoda for
                        better AI understanding of your product's features and
                        working in depth.
                    </p>
                </div>

                <button type="submit" class="save-button">Validate</button>
            </form>
        {:else}
            <ValidationResults {validationResult} />
        {/if}
    </div>
</main>

<Footer />

<style>
    .product-details {
        background-color: #f8fafc;
        padding: 3rem 0;
    }

    .container {
        max-width: 800px;
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
        color: #ff6347;
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
        background-color: #ff6347;
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

    .card {
        background-color: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.5rem;
    }

    .card h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #ff6347;
        padding-bottom: 0.5rem;
    }

    .form-field {
        position: relative;
        margin-bottom: 1.5rem;
        margin-right: 1.5rem;
    }

    label {
        display: block;
        font-weight: 600;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-family: "Nunito", sans-serif;
        font-size: 1rem;
        color: #4a5568;
        min-height: 200px;
        resize: vertical;
        padding-bottom: 2rem; /* Make room for the character count */
    }

    textarea:focus {
        outline: none;
        border-color: #ff6347;
        box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.5);
    }

    .coming-soon {
        background-color: #e6fffa;
        border-left: 4px solid #38b2ac;
    }

    .card-description {
        font-size: 0.9rem;
        color: #718096;
    }

    .save-button {
        display: block;
        width: 100%;
        max-width: 300px;
        margin: 2rem auto 0;
        padding: 1rem;
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .save-button:hover {
        background-color: #ff4500;
    }

    .character-count {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
        color: #718096;
        background-color: #f7fafc;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
    }
</style>
