<script>
	export let data;
	import { formatDate } from '$lib/Utils.js';

	function firstP(content) {
		const match = content.match(/<p>.*?<\/p>/);
		return match ? match[0] : '';
	}
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Un blog accessible de fou" />
</svelte:head>
