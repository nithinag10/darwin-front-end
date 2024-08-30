import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'build',
		assets: 'build',
		fallback: undefined,
		precompress: false,
		strict: true
	}),
	paths: {
		relative: false
	}
};

export default config;
