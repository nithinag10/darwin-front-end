<script>
    import { fade, fly } from "svelte/transition";
    import { goto } from "$app/navigation";

    let painPoints = [
        {
            title: "Product Page Information Overload",
            severity: "High",
            impact: "User Overwhelm",
        },
        {
            title: "Checkout Process Complexity",
            severity: "Medium",
            impact: "Abandoned Carts",
        },
        {
            title: "Mobile Navigation Issues",
            severity: "Low",
            impact: "Reduced Mobile Engagement",
        },
    ];

    function viewAllPainPoints() {
        goto("/dashboard/pain-points");
    }
</script>

<div class="card">
    <h2>
        Active Pain Points <span class="pain-point-count"
            >{painPoints.length} Active</span
        >
    </h2>
    <ul>
        {#each painPoints as painPoint, i}
            <li in:fly={{ y: 20, duration: 300, delay: 150 * i }}>
                <span class="severity {painPoint.severity.toLowerCase()}"
                    >{painPoint.severity[0]}</span
                >
                <span class="title">{painPoint.title}</span>
                <span class="impact">{painPoint.impact}</span>
            </li>
        {/each}
    </ul>
    <button on:click={viewAllPainPoints} class="view-all"
        >View All Pain Points →</button
    >
</div>

<style>
    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.2rem;
        color: #2d3748;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pain-point-count {
        font-size: 0.9rem;
        color: #4299e1;
        background-color: rgba(66, 153, 225, 0.1);
        padding: 0.2rem 0.5rem;
        border-radius: 12px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        padding: 0.75rem;
        background-color: #f7fafc;
        border-radius: 6px;
        transition: background-color 0.3s ease;
    }

    li:hover {
        background-color: #edf2f7;
    }

    .severity {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.8rem;
        margin-right: 0.75rem;
        color: white;
    }

    .high {
        background-color: #f56565;
    }
    .medium {
        background-color: #ed8936;
    }
    .low {
        background-color: #48bb78;
    }

    .title {
        flex-grow: 1;
        color: #4a5568;
        font-weight: 500;
    }

    .impact {
        font-size: 0.9rem;
        color: #718096;
        margin-left: 0.75rem;
    }

    .view-all {
        display: inline-block;
        margin-top: 1rem;
        color: #4299e1;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .view-all:hover {
        color: #3182ce;
    }
</style>
