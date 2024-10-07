<script>
    import { fade, fly, slide } from "svelte/transition";
    import { writable } from "svelte/store";
    import Breadcrumb from "../Breadcrumb.svelte";

    let tickets = writable([
        {
            id: 1,
            title: "Product Page Overload Causing User Confusion",
            priority: "High",
            due: "7d",
            status: "In Progress",
            description:
                "Users are experiencing information overload on product pages due to excessive content such as lengthy descriptions, numerous recommendations, and multiple CTAs (Call to Actions).",
            expectedBehavior:
                "Product pages should present essential information clearly, allowing users to make informed decisions without feeling overwhelmed.",
            actualBehavior:
                "The current design presents too much information simultaneously, leading to potential decision paralysis and decreased conversion rates.",
            userImpact:
                "Increases cognitive load, leading to frustration and potential abandonment of the purchase process.",
            businessImpact:
                "Could result in lower sales conversions and reduced customer satisfaction.",
            solution: [
                "Simplify Layout: Reorganize product pages to highlight key information (price, reviews, shipping options) prominently.",
                "Use Progressive Disclosure: Allow users to expand sections for more details if desired.",
                "Reduce Visual Clutter: Limit the number of recommendations and ads displayed alongside the product.",
            ],
            estimatedTime: 40,
        },
        {
            id: 2,
            title: "Dashboard Performance",
            priority: "Medium",
            due: "5d",
            status: "In Progress",
            description:
                "The dashboard is experiencing slow load times and performance issues, making it difficult for users to navigate and use effectively.",
            expectedBehavior:
                "The dashboard should load quickly and provide a smooth user experience.",
            actualBehavior:
                "The current implementation results in slow load times and frequent freezes, causing frustration and decreased productivity.",
            userImpact: "Increases frustration and decreases productivity.",
            businessImpact:
                "Could result in decreased efficiency and increased support requests.",
            solution: [
                "Optimize Database Queries: Review and optimize database queries to improve performance.",
                "Implement Caching: Cache frequently accessed data to reduce load times.",
                "Use Lazy Loading: Load data and resources only when needed.",
            ],
            estimatedTime: 30, // in hours
        },
        {
            id: 3,
            title: "User Onboarding Flow",
            priority: "Low",
            due: "7d",
            status: "In Progress",
            description:
                "The current user onboarding flow is confusing and unintuitive, leading to a high drop-off rate during the sign-up process.",
            expectedBehavior:
                "The user onboarding flow should be clear, intuitive, and guide users through the sign-up process smoothly.",
            actualBehavior:
                "The current flow is confusing and unclear, causing users to abandon the sign-up process.",
            userImpact: "Increases drop-off rate during the sign-up process.",
            businessImpact:
                "Could result in decreased user acquisition and growth.",
            solution: [
                "Simplify the Sign-Up Process: Reduce the number of required fields and steps.",
                "Use Progressive Disclosure: Allow users to expand sections for more details if desired.",
                "Provide Clear Instructions: Use clear and concise instructions throughout the sign-up process.",
            ],
            estimatedTime: 20, // in hours
        },
    ]);

    let editingTicket = null;
    let expandedTicket = null;

    function editTicket(ticket) {
        editingTicket = { ...ticket };
    }

    function saveTicket() {
        tickets.update((t) =>
            t.map((ticket) =>
                ticket.id === editingTicket.id ? editingTicket : ticket,
            ),
        );
        editingTicket = null;
    }

    function markAsDone(id) {
        tickets.update((t) =>
            t.map((ticket) =>
                ticket.id === id ? { ...ticket, status: "Done" } : ticket,
            ),
        );
    }

    function discardTicket(id) {
        tickets.update((t) => t.filter((ticket) => ticket.id !== id));
    }

    function toggleExpandTicket(id) {
        expandedTicket = expandedTicket === id ? null : id;
    }

    function getPriorityColor(priority) {
        switch (priority.toLowerCase()) {
            case "high":
                return "#F56565";
            case "medium":
                return "#ED8936";
            case "low":
                return "#48BB78";
            default:
                return "#4A5568";
        }
    }

    let breadcrumbItems = [
        { label: "Dashboard", href: "/dashboard" },
        {
            label: "Development Tickets",
            href: "/dashboard/development-tickets",
        },
    ];
</script>

<div class="dashboard-content" in:fade={{ duration: 300 }}>
    <Breadcrumb items={breadcrumbItems} />
    <div class="card" in:fade={{ duration: 300 }}>
        <h2>Development Tickets</h2>
        <div class="ticket-list">
            {#each $tickets as ticket (ticket.id)}
                <div class="ticket" in:fly={{ y: 20, duration: 300 }}>
                    <div class="ticket-header">
                        <h3>{ticket.title}</h3>
                        <div class="ticket-meta">
                            <span
                                class="priority"
                                style="background-color: {getPriorityColor(
                                    ticket.priority,
                                )}">{ticket.priority}</span
                            >
                            <span class="due">Due: {ticket.due}</span>
                            <span class="status">{ticket.status}</span>
                            <span class="estimated-time"
                                >{ticket.estimatedTime}h</span
                            >
                        </div>
                    </div>
                    <div class="ticket-actions">
                        <button
                            on:click={() => toggleExpandTicket(ticket.id)}
                            class="action-button details"
                        >
                            {expandedTicket === ticket.id ? "Hide" : "Details"}
                        </button>
                        <button
                            on:click={() => editTicket(ticket)}
                            class="action-button edit">Edit</button
                        >
                        <button
                            on:click={() => markAsDone(ticket.id)}
                            class="action-button done">Done</button
                        >
                        <button
                            on:click={() => discardTicket(ticket.id)}
                            class="action-button discard">Discard</button
                        >
                    </div>
                    {#if expandedTicket === ticket.id}
                        <div
                            class="ticket-details"
                            in:slide={{ duration: 300 }}
                        >
                            <div class="detail-section">
                                <h4>Description</h4>
                                <p>{ticket.description}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Expected Behavior</h4>
                                <p>{ticket.expectedBehavior}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Actual Behavior</h4>
                                <p>{ticket.actualBehavior}</p>
                            </div>
                            <div class="detail-section">
                                <h4>Impact Assessment</h4>
                                <div class="impact">
                                    <strong>User Impact:</strong>
                                    <p>{ticket.userImpact}</p>
                                </div>
                                <div class="impact">
                                    <strong>Business Impact:</strong>
                                    <p>{ticket.businessImpact}</p>
                                </div>
                            </div>
                            <div class="detail-section">
                                <h4>Solution</h4>
                                <ul>
                                    {#each ticket.solution as step}
                                        <li>{step}</li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

{#if editingTicket}
    <div class="modal-overlay" in:fade={{ duration: 200 }}>
        <div class="modal" in:fly={{ y: -20, duration: 300 }}>
            <h3>Edit Ticket</h3>
            <input bind:value={editingTicket.title} placeholder="Title" />
            <select bind:value={editingTicket.priority}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input bind:value={editingTicket.due} placeholder="Due Date" />
            <input
                type="number"
                bind:value={editingTicket.estimatedTime}
                placeholder="Estimated Time (hours)"
            />
            <textarea
                bind:value={editingTicket.description}
                placeholder="Description"
            ></textarea>
            <div class="modal-actions">
                <button on:click={saveTicket} class="action-button save"
                    >Save</button
                >
                <button
                    on:click={() => (editingTicket = null)}
                    class="action-button cancel">Cancel</button
                >
            </div>
        </div>
    </div>
{/if}

<style>
    .dashboard-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .card {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        color: #2d3748;
        margin-bottom: 1.5rem;
    }

    .ticket-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .ticket {
        background-color: #f7fafc;
        border-radius: 6px;
        padding: 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid #e2e8f0;
    }

    .ticket-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .ticket-header h3 {
        font-size: 1.1rem;
        color: #2d3748;
        margin: 0;
    }

    .ticket-meta {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .ticket-meta span {
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .priority {
        color: white;
    }

    .due,
    .status,
    .estimated-time {
        background-color: #edf2f7;
        color: #4a5568;
    }

    .ticket-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .action-button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.1s ease;
    }

    .action-button:hover {
        transform: translateY(-1px);
    }

    .details {
        background-color: #4299e1;
        color: white;
    }
    .edit {
        background-color: #ecc94b;
        color: #744210;
    }
    .done {
        background-color: #48bb78;
        color: white;
    }
    .discard {
        background-color: #f56565;
        color: white;
    }

    .ticket-details {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
    }

    .detail-section {
        margin-bottom: 1.5rem;
    }

    .detail-section:last-child {
        margin-bottom: 0;
    }

    .ticket-details h4 {
        font-size: 1rem;
        color: #2d3748;
        margin: 0 0 0.5rem;
        font-weight: 600;
    }

    .ticket-details p,
    .ticket-details li {
        color: #4a5568;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .impact {
        margin-bottom: 0.75rem;
    }

    .impact strong {
        color: #2d3748;
        font-weight: 600;
    }

    .ticket-details ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        color: #4a5568;
    }

    .ticket-details li {
        margin-bottom: 0.5rem;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background-color: white;
        border-radius: 8px;
        padding: 1.5rem;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .modal h3 {
        font-size: 1.25rem;
        color: #2d3748;
        margin-bottom: 1rem;
    }

    .modal input,
    .modal select,
    .modal textarea {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        font-size: 0.875rem;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .save {
        background-color: #4299e1;
        color: white;
    }
    .cancel {
        background-color: #edf2f7;
        color: #4a5568;
    }
</style>
