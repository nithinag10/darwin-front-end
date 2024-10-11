<script>
    import { fade, fly, slide } from "svelte/transition";
    import { writable } from "svelte/store";
    import Breadcrumb from "../Breadcrumb.svelte";

    export const painPoints = writable([
        {
            id: 1,
            title: "Product Pages Have Excessive Information Leading to User Overwhelm",
            description:
                "Amazon's product pages contain a vast amount of information, including detailed descriptions, specifications, customer reviews, sponsored products, and additional recommendations. While comprehensive, the sheer volume can overwhelm users, making it difficult to focus on key details necessary for making a purchase decision.",
            location: "Product Detail Pages across the website",
            severityLevel: "High",
            affectedEmotions: ["Overwhelm", "Confusion", "Decision Paralysis"],
            frequency: "High; affects most users browsing product pages",
            impactAssessment: {
                userSatisfaction:
                    "Decreased due to difficulty in processing information",
                conversionRates:
                    "Potential reduction as users may leave without completing a purchase",
                businessObjectives:
                    "Negative impact on sales and customer experience",
            },
            associatedMetrics: {
                cognitiveLoadScore:
                    "High (indicating users may find it mentally taxing to process all the information)",
                interactionEfficiencyMetrics:
                    "Low (users take longer to find key information and make decisions)",
            },
        },
        {
            id: 2,
            title: "Complex Navigation Menu Leading to User Confusion",
            description:
                "The main navigation menu, particularly the 'All' menu, presents an extensive list of categories and subcategories. This complexity can overwhelm users, making it challenging to locate specific departments or products.",
            location:
                "Main Navigation Menu ('All' button at the top-left corner)",
            severityLevel: "Medium",
            affectedEmotions: ["Confusion", "Frustration"],
            frequency: "Common among users trying to browse categories",
            impactAssessment: {
                userSatisfaction: "Decreased due to difficulty in navigation",
                engagement:
                    "Users may spend excessive time searching or abandon the site",
                businessObjectives:
                    "Potentially reduces sales due to navigation barriers",
            },
            associatedMetrics: {
                cognitiveLoadScore:
                    "Elevated (users may find it mentally challenging to navigate)",
                emotionalJourneyMapping:
                    "Identifies points where users feel confused or frustrated during navigation",
            },
        },
        // You can add more pain points here if needed
    ]);

    let expandedPainPoint = null;

    function toggleExpandPainPoint(id) {
        expandedPainPoint = expandedPainPoint === id ? null : id;
    }

    function getSeverityColor(severity) {
        switch (severity.toLowerCase()) {
            case "high":
                return "#F56565";
            case "medium":
                return "#ED8936";
            case "low":
                return "#48BB78";
            default:
                return "#4A5568";
        }
    }

    let breadcrumbItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Pain Points", href: "/dashboard/pain-points" },
    ];
</script>

<div class="dashboard-content" in:fade={{ duration: 300 }}>
    <Breadcrumb items={breadcrumbItems} />
    <div class="card" in:fade={{ duration: 300 }}>
        <h2>Pain Points</h2>
        <div class="pain-point-list">
            {#each $painPoints as painPoint (painPoint.id)}
                <div class="pain-point" in:fly={{ y: 20, duration: 300 }}>
                    <div class="pain-point-header">
                        <h3>{painPoint.title}</h3>
                        <div class="pain-point-meta">
                            <span
                                class="severity"
                                style="background-color: {getSeverityColor(
                                    painPoint.severityLevel,
                                )}">{painPoint.severityLevel}</span
                            >
                            <span class="location">{painPoint.location}</span>
                        </div>
                    </div>
                    <div class="pain-point-actions">
                        <button
                            on:click={() => toggleExpandPainPoint(painPoint.id)}
                            class="action-button details"
                        >
                            {expandedPainPoint === painPoint.id
                                ? "Hide"
                                : "Details"}
                        </button>
                    </div>
                    {#if expandedPainPoint === painPoint.id}
                        <div
                            class="pain-point-details"
                            in:slide={{ duration: 300 }}
                        >
                            <div class="detail-section">
                                <h4>Description</h4>
                                <p>{painPoint.description}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Affected User Emotions</h4>
                                <p>{painPoint.affectedEmotions.join(", ")}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Frequency of Occurrence</h4>
                                <p>{painPoint.frequency}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Impact Assessment</h4>
                                <div class="impact">
                                    <strong>User Satisfaction:</strong>
                                    <p>
                                        {painPoint.impactAssessment
                                            .userSatisfaction}
                                    </p>
                                </div>
                                <div class="impact">
                                    <strong>Conversion Rates:</strong>
                                    <p>
                                        {painPoint.impactAssessment
                                            .conversionRates}
                                    </p>
                                </div>
                                <div class="impact">
                                    <strong>Business Objectives:</strong>
                                    <p>
                                        {painPoint.impactAssessment
                                            .businessObjectives}
                                    </p>
                                </div>
                            </div>
                            <div class="detail-section">
                                <h4>Associated Metrics</h4>
                                <div class="impact">
                                    <strong>Cognitive Load Score:</strong>
                                    <p>
                                        {painPoint.associatedMetrics
                                            .cognitiveLoadScore}
                                    </p>
                                </div>
                                <div class="impact">
                                    <strong
                                        >Interaction Efficiency Metrics:</strong
                                    >
                                    <p>
                                        {painPoint.associatedMetrics
                                            .interactionEfficiencyMetrics}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .dashboard-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .card {
        background-color: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: "Lora", serif;
        font-size: 1.8rem;
        color: #2d3748;
        margin-bottom: 1.5rem;
    }

    .pain-point-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .pain-point {
        background-color: #f7fafc;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .pain-point-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .pain-point-header h3 {
        font-size: 1.2rem;
        color: #2d3748;
        margin: 0;
    }

    .pain-point-meta {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .pain-point-meta span {
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .severity {
        color: white;
    }

    .location {
        background-color: #e2e8f0;
        color: #4a5568;
    }

    .pain-point-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .action-button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.1s ease;
    }

    .action-button:hover {
        transform: translateY(-1px);
    }

    .details {
        background-color: #4299e1;
        color: white;
    }

    .pain-point-details {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #e2e8f0;
    }

    .detail-section {
        margin-bottom: 1.5rem;
    }

    .detail-section:last-child {
        margin-bottom: 0;
    }

    .pain-point-details h4 {
        font-size: 1.1rem;
        color: #2d3748;
        margin: 0 0 0.75rem;
        font-weight: 600;
    }

    .pain-point-details p {
        color: #4a5568;
        margin: 0 0 0.5rem;
        line-height: 1.6;
    }

    .impact {
        margin-bottom: 0.75rem;
    }

    .impact strong {
        color: #2d3748;
        font-weight: 600;
    }
</style>
