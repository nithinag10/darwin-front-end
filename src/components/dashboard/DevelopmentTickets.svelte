<script>
    import { fade, fly } from "svelte/transition";
    import { goto } from "$app/navigation";

    let tickets = [
        { title: "Settings Navigation Redesign", priority: "High", due: "2d" },
        { title: "Dashboard Performance", priority: "Medium", due: "5d" },
        { title: "User Onboarding Flow", priority: "Low", due: "7d" },
    ];

    function viewAllTickets() {
        goto("/dashboard/development-tickets");
    }
</script>

<div class="card">
    <h2>
        Development Tickets <span class="ticket-count"
            >{tickets.length} Active</span
        >
    </h2>
    <ul>
        {#each tickets as ticket, i}
            <li in:fly={{ y: 20, duration: 300, delay: 150 * i }}>
                <span class="priority {ticket.priority.toLowerCase()}"
                    >{ticket.priority[0]}</span
                >
                <span class="title">{ticket.title}</span>
                <span class="due">Due: {ticket.due}</span>
            </li>
        {/each}
    </ul>
    <button on:click={viewAllTickets} class="view-all"
        >View All Tickets →</button
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

    .ticket-count {
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

    .priority {
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

    .due {
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
