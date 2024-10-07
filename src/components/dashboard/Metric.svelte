<script>
    export let metric;
    $: dashArray = 2 * Math.PI * 30; // Reduced radius
    $: dashOffset = dashArray * (1 - metric.value / 100);

    function getColor(value) {
        if (value >= 80) return "#4299E1";
        if (value >= 60) return "#48BB78";
        if (value >= 40) return "#ECC94B";
        return "#F56565";
    }
</script>

<div class="metric-card">
    <div class="circular-progress">
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Reduced size -->
            <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="#E2E8F0"
                stroke-width="6"
            />
            <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke={getColor(metric.value)}
                stroke-width="6"
                stroke-dasharray={dashArray}
                stroke-dashoffset={dashOffset}
                transform="rotate(-90 40 40)"
            />
            <text
                x="40"
                y="40"
                text-anchor="middle"
                dy="6"
                font-size="18"
                font-weight="bold"
                fill="#2D3748"
            >
                {metric.value}%
            </text>
        </svg>
    </div>
    <div class="metric-info">
        <span class="metric-icon">{metric.icon}</span>
        <h3>{metric.title}</h3>
    </div>
</div>

<style>
    .metric-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        width: 100%;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .circular-progress {
        margin-bottom: 0.5rem;
    }

    .metric-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .metric-icon {
        font-size: 1.25rem;
        color: #007bff;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-family: "Inter", sans-serif;
        font-size: 0.875rem;
        color: #4a5568;
        margin: 0;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .metric-card {
            padding: 0.75rem;
        }
    }
</style>
