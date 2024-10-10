<script>
    import { fade, fly } from "svelte/transition";
    let suggestions = [
        { title: "Implement guided tutorial", emoji: "🚀" },
        { title: "Optimize image loading", emoji: "🖼️" },
        { title: "Enhance user onboarding", emoji: "🌟" },
        { title: "Improve mobile responsiveness", emoji: "📱" },
        { title: "Add dark mode option", emoji: "🌙" },
    ];
</script>

<div class="card">
    <h2>Top AI Suggestions 💡</h2>
    <ul>
        {#each suggestions as suggestion, i}
            <li in:fly={{ y: 20, duration: 300, delay: 150 * i }}>
                <span class="emoji">{suggestion.emoji}</span>
                <span class="title">{suggestion.title}</span>
            </li>
        {/each}
    </ul>
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
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        padding: 0.5rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    li:hover {
        background-color: #edf2f7;
    }

    .emoji {
        font-size: 1.5rem;
        margin-right: 0.75rem;
    }

    .title {
        color: #4a5568;
        font-size: 0.95rem;
    }
</style>
