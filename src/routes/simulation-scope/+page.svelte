<script>
    import { goto } from "$app/navigation";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";

    let scopeLevel = "";
    let analysisDepth = "";
    let businessObjective = "";
    let customAreas = "";
    let excludedAreas = "";
    let excludeReasons = "";
    let specificFlows = "";

    function handleSubmit() {
        // Here you would typically save the simulation scope data
        // For now, we'll just navigate to a hypothetical simulation page
        goto("/simulate");
    }
</script>

<Header />

<main class="simulation-scope">
    <div class="container">
        <h1>Set Your <span class="highlight">Simulation Scope</span></h1>
        <p class="description">
            Specify which parts of your product you'd like our AI agents to
            analyze to receive targeted and actionable insights.
        </p>

        <form on:submit|preventDefault={handleSubmit}>
            <div class="card">
                <h2>Scope Level</h2>
                <div class="radio-group">
                    <label>
                        <input
                            type="radio"
                            bind:group={scopeLevel}
                            value="entire"
                        />
                        Entire Product Simulation
                    </label>
                    <label>
                        <input
                            type="radio"
                            bind:group={scopeLevel}
                            value="specific"
                        />
                        Specific User Flows
                    </label>
                    <label>
                        <input
                            type="radio"
                            bind:group={scopeLevel}
                            value="custom"
                        />
                        Custom Areas
                    </label>
                </div>
                {#if scopeLevel === "specific"}
                    <div class="form-field">
                        <label for="specificFlows">Specify User Flows:</label>
                        <textarea
                            id="specificFlows"
                            bind:value={specificFlows}
                            placeholder="Enter specific user flows or journeys to analyze, e.g., 'User Registration, Checkout Process'"
                        ></textarea>
                    </div>
                {:else if scopeLevel === "custom"}
                    <div class="form-field">
                        <label for="customAreas">Specify Custom Areas:</label>
                        <textarea
                            id="customAreas"
                            bind:value={customAreas}
                            placeholder="Enter specific pages, screens, or components to analyze"
                        ></textarea>
                    </div>
                {/if}
            </div>

            <div class="card">
                <h2>Depth of Analysis</h2>
                <select bind:value={analysisDepth}>
                    <option value="">Select analysis depth</option>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="in-depth">In-Depth</option>
                </select>
            </div>

            <div class="card">
                <h2>Business Objective</h2>
                <div class="form-field">
                    <label for="businessObjective"
                        >What's your main business goal for this simulation?</label
                    >
                    <textarea
                        id="businessObjective"
                        bind:value={businessObjective}
                        placeholder="E.g., Improve user engagement, Increase conversion rates"
                    ></textarea>
                </div>
            </div>

            <div class="card">
                <h2>Exclusions</h2>
                <div class="form-field">
                    <label for="excludedAreas"
                        >Areas to Exclude from Simulation:</label
                    >
                    <textarea
                        id="excludedAreas"
                        bind:value={excludedAreas}
                        placeholder="Specify parts of the product to exclude"
                    ></textarea>
                </div>
                <div class="form-field">
                    <label for="excludeReasons">Reasons for Exclusion:</label>
                    <textarea
                        id="excludeReasons"
                        bind:value={excludeReasons}
                        placeholder="E.g., Under development, Not relevant"
                    ></textarea>
                </div>
            </div>

            <button type="submit" class="simulate-button"
                >Let's Simulate! 🚀</button
            >
        </form>
    </div>
</main>

<Footer />

<style>
    .simulation-scope {
        padding: 2rem 0;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    h1 {
        font-family: "Playfair Display", serif;
        font-size: 2.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
        text-align: center;
    }

    .highlight {
        color: #4299e1;
    }

    .description {
        text-align: center;
        color: #4a5568;
        margin-bottom: 2rem;
    }

    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.5rem;
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1rem;
    }

    .form-field {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #4a5568;
    }

    input[type="text"],
    textarea,
    select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        font-size: 1rem;
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }

    .radio-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .radio-group label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: normal;
    }

    .simulate-button {
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
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    .simulate-button:hover {
        background-color: #3182ce;
        transform: translateY(-2px);
    }

    .simulate-button:active {
        transform: translateY(0);
    }
</style>
