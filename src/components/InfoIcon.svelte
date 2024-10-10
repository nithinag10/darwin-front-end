<script>
    import { fade } from "svelte/transition";
    export let message = "";
    let showTooltip = false;
</script>

<div class="info-icon-container">
    <button
        class="info-icon"
        on:mouseenter={() => (showTooltip = true)}
        on:mouseleave={() => (showTooltip = false)}
        aria-label="More information"
    >
        i
    </button>
    {#if showTooltip}
        <div class="tooltip" transition:fade={{ duration: 150 }}>
            <div class="cloud">
                <div class="cloud-content">{message}</div>
            </div>
        </div>
    {/if}
</div>

<style>
    .info-icon-container {
        display: inline-block;
        position: relative;
    }

    .info-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #4299e1;
        color: white;
        border: none;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .info-icon:hover {
        background-color: #3182ce;
    }

    .tooltip {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        margin-bottom: 10px;
        z-index: 10;
    }

    .cloud {
        position: relative;
        background-color: white;
        border-radius: 20px;
        padding: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .cloud::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid white;
    }

    .cloud-content {
        font-size: 14px;
        color: #4a5568;
        text-align: center;
    }
</style>
