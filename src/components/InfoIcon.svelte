<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("click");
    }
</script>

<span class="info-icon" on:click={handleClick}>ⓘ</span>

<style>
    .info-icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        border-radius: 50%;
        background-color: #4299e1;
        color: white;
        font-size: 12px;
        cursor: pointer;
        margin-left: 5px;
    }
</style>
