<script>
    export let faqs = [
        {
            question: "What is LemonSoda.ai?",
            answer: "LemonSoda.ai is a platform that uses AI to uncover hidden user insights and improve your product's user experience.",
        },
        {
            question: "How does it work?",
            answer: "Our custom AI agents simulate diverse user interactions, identifying potential pain points and areas for improvement.",
        },
        {
            question: "What are the benefits?",
            answer: "You receive a detailed report with data-driven recommendations to enhance your product's user experience.",
        },
        {
            question: "How can I get started?",
            answer: "Simply sign up on our platform and follow the steps to create custom AI agents for your product.",
        },
    ];
</script>

<section class="faq">
    <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
            {#each faqs as faq}
                <div class="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq {
        background: #fff9e6;
        padding: 4rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: #1a2a57;
        font-family: "Fredoka One", cursive;
    }

    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .faq-item {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h3 {
        font-size: 1.2rem;
        color: #1a2a57;
        margin-bottom: 0.5rem;
    }

    p {
        color: #4a5568;
        font-size: 1rem;
        line-height: 1.6;
    }
</style>
