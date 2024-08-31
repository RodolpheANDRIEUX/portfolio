<script>
	import coffeeWebp from '$lib/images/coffee.webp';
	import coffeePng from '$lib/images/coffee.png';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="" content="" />
</svelte:head>

<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset={coffeeWebp} />
	<img aria-hidden="true" class="bg-decorations coffee1" src={coffeePng} alt="coffee" />
</picture>
<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset="/src/lib/images/coffee2.webp" />
	<img aria-hidden="true" class="bg-decorations coffee" src="/src/lib/images/coffee2.png" alt="more coffee" />
</picture>