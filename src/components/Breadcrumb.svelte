<script>
    export let items = [];
</script>

<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
        {#each items as item, index}
            <li>
                {#if index === items.length - 1}
                    <span aria-current="page">{item.label}</span>
                {:else}
                    <a href={item.href}>{item.label}</a>
                {/if}
            </li>
        {/each}
    </ol>
</nav>

<style>
    .breadcrumb {
        margin-bottom: 1rem;
    }

    ol {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        display: flex;
        align-items: center;
    }

    li:not(:last-child)::after {
        content: "/";
        margin: 0 0.5rem;
        color: #718096;
    }

    a {
        color: #4299e1;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    span {
        color: #2d3748;
        font-weight: 600;
    }
</style>
