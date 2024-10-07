<script>
    import Metric from "./Metric.svelte";
    import { fade } from "svelte/transition";

    let metrics = [
        { id: 1, title: "Productivity Enhancement", value: 85, icon: "🚀" },
        { id: 2, title: "User Excitement Potential", value: 75, icon: "✨" },
        { id: 3, title: "Interaction Efficiency", value: 60, icon: "⚡" },
        { id: 4, title: "Cognitive Load", value: 40, icon: "🧠" },
    ];
</script>

<div class="card" in:fade={{ duration: 300 }}>
    <h2>
        LemonSoda's Prediction <span class="highlight">About Your Users</span>
    </h2>
    <div class="metrics-grid">
        {#each metrics as metric}
            <Metric {metric} />
        {/each}
    </div>
</div>

<style>
    .card {
        background-color: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.5rem;
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.4rem;
        color: #2d3748;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .highlight {
        color: #4299e1;
        font-weight: 700;
    }

    .metrics-grid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        gap: 1rem;
    }

    @media (max-width: 1024px) {
        .metrics-grid {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        .card {
            padding: 1rem;
        }

        h2 {
            font-size: 1.2rem;
        }
    }
</style>
