<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<slot />

<style>
    :global(body) {
        font-family: "Nunito", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff9e6;
        color: #1a2a57;
    }

    :global(*) {
        box-sizing: inherit;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Fredoka One", cursive;
        margin: 0;
    }
</style>
