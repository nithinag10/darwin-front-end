import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: azure({
		// Empty options object for default settings
	})
};

export default config;
