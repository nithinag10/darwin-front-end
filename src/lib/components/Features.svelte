<script>
    import comprehensiveReportsImage from "$lib/images/comprehensive_reports_new.png";
    import painPointImage from "$lib/images/pain_point_identification.png";
    import actionableInsightsImage from "$lib/images/actionable_insights.png";
    import aiUserSimulationImage from "$lib/images/ai_simulation_new.png";

    const features = [
        {
            title: "AI User Simulation",
            description:
                "Simulate diverse user interactions with your product using advanced AI algorithms.",
            image: aiUserSimulationImage,
        },
        {
            title: "Pain Point Identification",
            description:
                "Quickly identify and prioritize user pain points and areas for improvement.",
            image: painPointImage,
        },
        {
            title: "Actionable Insights",
            description:
                "Receive clear, actionable insights to enhance your product's user experience.",
            image: actionableInsightsImage,
        },
        {
            title: "Comprehensive Reports",
            description:
                "Get detailed reports with visualizations to guide your product development.",
            image: comprehensiveReportsImage,
        },
    ];
</script>

<section id="features" class="features">
    <div class="container">
        <h2>Key Features</h2>
        <div class="feature-grid">
            {#each features as feature}
                <div class="feature-card">
                    <div class="image-container">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            class="feature-image"
                        />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .features {
        background-color: #fff9e6;
        padding: 6rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h2 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 4rem;
        color: #1a2a57;
        font-family: "Fredoka One", cursive;
        position: relative;
    }

    h2::after {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background-color: #ffd100;
        margin: 1rem auto 0;
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .feature-card {
        background: #ffffff;
        border-radius: 20px;
        padding: 2.5rem;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .image-container {
        width: 120px;
        height: 120px;
        margin: 0 auto 1.5rem;
        background-color: #f0f4f8;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .feature-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .feature-card:hover .feature-image {
        transform: scale(1.1);
    }

    h3 {
        color: #1a2a57;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-family: "Fredoka One", cursive;
    }

    p {
        color: #4a5568;
        font-size: 1rem;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .feature-grid {
            grid-template-columns: 1fr;
        }

        h2 {
            font-size: 2.5rem;
        }

        .feature-card {
            padding: 2rem;
        }
    }
</style>
