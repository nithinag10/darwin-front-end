<script>
    export let title = "";
    export let value = "";
</script>

<div class="metric-card">
    <p>{title}</p>
    <h3>{value}</h3>
</div>

<style>
    .metric-card {
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #555;
    }

    h3 {
        font-size: 1.5rem;
        color: #007bff; /* Changed to a more attractive blue */
        font-weight: bold;
    }
</style>
