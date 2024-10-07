<script>
    import { fade, fly } from "svelte/transition";
    let analyses = [
        {
            date: "Oct 7, 2024",
            id: "SIM12345",
            persona: "Tech-Savvy Professional",
            scope: "Full Product",
            status: "Completed",
        },
        {
            date: "Oct 6, 2024",
            id: "SIM12344",
            persona: "New User",
            scope: "Onboarding Flow",
            status: "Completed",
        },
    ];
</script>

<div class="card">
    <h2>Recent Analysis</h2>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Simulation ID</th>
                <th>AI Persona</th>
                <th>Scope</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each analyses as analysis, i}
                <tr in:fly={{ y: 20, duration: 300, delay: 150 * i }}>
                    <td>{analysis.date}</td>
                    <td>{analysis.id}</td>
                    <td>{analysis.persona}</td>
                    <td>{analysis.scope}</td>
                    <td
                        ><span class="status completed">{analysis.status}</span
                        ></td
                    >
                    <td><a href="#" class="action-link">View Report</a></td>
                </tr>
            {/each}
        </tbody>
    </table>
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

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        text-align: left;
        padding: 0.75rem;
        border-bottom: 1px solid #e2e8f0;
    }

    th {
        font-weight: 600;
        color: #2d3748;
        background-color: #f7fafc;
    }

    td {
        color: #4a5568;
    }

    .status {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .status.completed {
        background-color: #48bb78;
        color: white;
    }

    .action-link {
        color: #4299e1;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .action-link:hover {
        color: #3182ce;
    }
</style>
