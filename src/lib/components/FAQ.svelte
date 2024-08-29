<script>
    const faqs = [
        {
            question: "What is SvelteKit?",
            answer: "SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.",
        },
        {
            question: "How do I get started with SvelteKit?",
            answer: "You can get started by running 'npm create svelte@latest my-app' in your terminal, then following the prompts to set up your project.",
        },
        // Add more FAQs as needed
    ];
</script>

<section class="section">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-list">
        {#each faqs as faq}
            <div class="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .faq-list {
        display: grid;
        gap: 1rem;
    }
    .faq-item {
        background-color: #fff9e6;
        border: 2px solid #ffd100;
    }
    .faq-item h3 {
        color: #ff6b35;
    }
</style>
