<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close");
    }
</script>

<h2>Analysis Started</h2>

<p>
    Your analysis has been successfully started! You can view the results in the <strong
        >Dashboard</strong
    >.
</p>

<div class="buttons">
    <button class="btn btn-submit" on:click={handleClose}> Close </button>
</div>

<style>
    h2 {
        color: #1a2a57;
        margin-bottom: 1rem;
        text-align: center;
    }

    p {
        font-size: 1rem;
        color: #333;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    .btn-submit {
        background-color: #28a745;
        color: white;
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-submit:hover {
        background-color: #218838;
    }
</style>
