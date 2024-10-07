<script>
    let journeySteps = [
        { step: "Onboarding", rating: 4.5 },
        { step: "Search Product", rating: 3.8 },
        { step: "Cart Checkout", rating: 4.2 },
        { step: "Feedback Submission", rating: 4.7 },
    ];
</script>

<div class="journey-container">
    <h3>User Experience Journey</h3>
    <div class="timeline">
        {#each journeySteps as journey, index}
            <div class="timeline-step">
                <div class="circle">{journey.rating.toFixed(1)}</div>
                <span class="step-label">{journey.step}</span>
                {#if index < journeySteps.length - 1}
                    <div class="line"></div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .journey-container {
        background-color: #f9fafb;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        margin-bottom: 1rem;
    }

    h3 {
        font-family: "Playfair Display", serif;
        font-size: 1rem;
        color: #2d3748;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .timeline {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .timeline-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        flex: 1;
    }

    .circle {
        background-color: #3182ce;
        color: white;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: bold;
        z-index: 1;
        margin-bottom: 0.25rem;
    }

    .step-label {
        font-size: 0.7rem;
        color: #2d3748;
        text-align: center;
        max-width: 60px;
    }

    .line {
        height: 2px;
        background-color: #cbd5e0;
        position: absolute;
        top: 18px;
        left: 50%;
        right: -50%;
        z-index: 0;
    }

    .timeline-step:last-child .line {
        display: none;
    }
</style>
