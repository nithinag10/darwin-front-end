<script>
    // import { navigate } from "svelte-routing"; // Unused import removed
    import AnalysisWizard from "$lib/components/AnalysisWizard.svelte";
    import { showModal } from "$lib/stores/modalStore";
    import MetricCard from "$lib/components/MetricCard.svelte";
    import { projectsStore, loadProjects } from "$lib/stores/projectsStore";
    import { onMount } from "svelte";

    let projects = [];

    onMount(() => {
        loadProjects();
        const unsubscribe = projectsStore.subscribe((value) => {
            projects = value;
        });
        return () => unsubscribe();
    });

    function startNewAnalysis() {
        console.log("Start Analysis clicked");
        // Navigate to the new wizard page
        window.location.href = "/dashboard/start-analysis";
    }
</script>

<main class="dashboard">
    <!-- Start New Analysis Section -->
    <section class="start-analysis-section card">
        <h2>Start New Analysis</h2>
        <p>
            Ready to uncover insights and enhance your product's user
            experience? Begin a new AI-powered analysis to identify areas for
            improvement and implement data-driven enhancements.
        </p>
        <button class="btn" on:click={startNewAnalysis}>
            Start New Analysis
        </button>
    </section>

    <section class="horizontal-section">
        <!-- Existing Project Overview Section -->
        <section class="project-overview">
            <h2>Project Overview</h2>
            <div class="project-stats">
                <div><MetricCard title="Total Analyses" value="7" /></div>
                <div>
                    <MetricCard title="Enhancements Suggested" value="42" />
                </div>
                <div><MetricCard title="Issues Flagged" value="15" /></div>
                <div><MetricCard title="Points Agreed" value="28" /></div>
            </div>
            <!-- Recent Analyses -->
            <div class="recent-analyses">
                <h3>Recent Analyses</h3>
                <div>
                    <p>Analysis #7 - [Date]</p>
                    <p>Enhancements: 8 | Issues: 3 | Agreed: 6</p>
                </div>
                <div>
                    <p>Analysis #6 - [Date]</p>
                    <p>Enhancements: 12 | Issues: 5 | Agreed: 9</p>
                </div>
                <a href="#" class="btn">View All Analyses →</a>
            </div>
        </section>

        <!-- Quick Actions Section -->
        <section class="quick-actions">
            <h2>Quick Actions</h2>
            <a href="#" class="btn">View Previous Analysis</a>
            <a href="#" class="btn">Manage Project Details</a>
            <a href="#" class="btn">Invite Team Member</a>
            <a href="#" class="btn">Generate Report</a>
        </section>
    </section>
</main>

<style>
    .dashboard {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Start New Analysis Section */
    .start-analysis-section {
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        text-align: center;
    }

    .start-analysis-section h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .start-analysis-section p {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        color: #333;
    }

    /* Project Overview Section */
    .project-overview {
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        flex: 3; /* Take more space */
    }

    .project-overview h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .project-stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .project-stats > * {
        flex: 1;
        box-sizing: border-box;
    }

    .recent-analyses {
        margin-top: 2rem;
    }

    .recent-analyses h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .recent-analyses div {
        background-color: #f9f9f9;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 0.5rem;
    }

    .recent-analyses p {
        margin: 0.25rem 0;
        color: #555;
    }

    /* Quick Actions Section */
    .quick-actions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        flex: 1; /* Take less space */
    }

    .quick-actions h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #1a2a57;
    }

    .quick-actions a.btn-view {
        display: inline-block;
        text-align: center;
    }

    .horizontal-section {
        display: flex;
        flex-direction: row;
        gap: 2rem; /* Added gap for spacing */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .project-stats {
            flex-direction: column;
        }

        .horizontal-section {
            flex-direction: column; /* Stack sections vertically on small screens */
        }

        .quick-actions {
            align-items: center;
        }
    }
</style>
