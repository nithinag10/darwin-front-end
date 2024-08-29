<script>
    const plans = [
        {
            name: "Basic",
            price: "$9.99",
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            name: "Pro",
            price: "$19.99",
            features: ["All Basic features", "Feature 4", "Feature 5"],
        },
        {
            name: "Enterprise",
            price: "Contact us",
            features: ["All Pro features", "Feature 6", "Feature 7"],
        },
    ];
</script>

<section class="section">
    <h2>Pricing</h2>
    <div class="pricing-plans">
        {#each plans as plan}
            <div class="plan">
                <h3>{plan.name}</h3>
                <p class="price">{plan.price}</p>
                <ul>
                    {#each plan.features as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>
                <a href="#" class="btn">Choose Plan</a>
            </div>
        {/each}
    </div>
</section>

<style>
    .pricing-plans {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .plan {
        flex-basis: calc(33.333% - 1rem);
        background-color: #fff9e6;
        border: 2px solid #ffd100;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .price {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0;
        color: #ff6b35;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 0.5rem;
    }
    .btn {
        display: inline-block;
        margin-top: 1rem;
        background-color: #1a2a57;
        color: #fff9e6;
    }
    .btn:hover {
        background-color: #2a3a67;
    }
</style>
