<script>
	import images from '$lib/images/';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Un blog accessible de fou" />
</svelte:head>

<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset="{images}/coffee.webp" />
	<img aria-hidden="true" class="bg-decorations coffee1" src="{images}/coffee.png" alt="coffee" />
</picture>