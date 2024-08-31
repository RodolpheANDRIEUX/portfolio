<script>
	export let data;
	import { formatDate } from '$lib/Utils.js';
	import coffeeWebp from '$lib/images/coffee.webp';
	import coffeePng from '$lib/images/coffee.png';
	import coffe2Webp from '$lib/images/coffee2.webp';
	import coffe2Png from '$lib/images/coffee2.png';
	import jira from '$lib/images/jira.png'
	const images = [ jira ]

	function firstP(content) {
		const match = content.match(/<p>.*?<\/p>/);
		return match ? match[0] : '';
	}
</script>

<svelte:head>
	<title>Blog de stage</title>
	<meta name="description" content="Blog de stage B2 YNOV" />
</svelte:head>

<h1 class="visually-hidden">Blog de stage B2 YNOV</h1>
<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset={coffeeWebp} />
	<img aria-hidden="true" class="bg-decorations coffee1" src={coffeePng} alt="coffee" />
</picture>
<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset={coffe2Webp} />
	<img aria-hidden="true" class="bg-decorations coffee" src={coffe2Png} alt="more coffee" />
</picture>

<section>
	{#each data.posts as post}
		<a class="article-link" href="/article/{post.id}">
			<article aria-labelledby="title-{post.id}">
				<div role="article">
					<time datetime={post.date}>{formatDate(post.date)}</time>
					<h2 id="title-{post.id}" style="view-transition-name: {post.title};">{post.title}</h2>
					<p style="view-transition-name: {post.id}-content;">{@html firstP(post.content)}</p>
					<span>...</span>
				</div>
				{#if post.image}
					<img src={images[post.image.imageName]} alt={post.image.imageAlt}
						 style="view-transition-name: img{post.id};"/>
				{/if}
			</article>
		</a>
	{/each}

	<a class="article-link" href="https://olympicwarriors.com/">
		<article aria-labelledby="Realisation du stage">
			<div role="article">
				<time datetime="2024-08-26T00:00:00.000Z">{formatDate("2024-08-26T00:00:00.000Z")}</time>
				<h2 id="final" style="view-transition-name: final;">La réalisation du stage</h2>
				<p style="view-transition-name: final-content;">Voici le lien vers la réalisation finale de ce stage. Notez que l'ensemble des feature ne sera rendu disponible qu'a la fin du décompte de la page d'acceuil.</p>
				<span>...</span>
			</div>

		</article>
	</a>
</section>

<style>
	section {
		padding: 5rem 0;
		backdrop-filter: blur(3px);
	}

	.bg-decorations {
		z-index: -1;
		position: absolute;
		opacity: .8;
	}

	.coffee1 {
		top: 100px;
		left: 3vw;
		width: 15%;
		opacity: .7;
	}

	.coffee {
		bottom: 200px;
		right: 2%;
		width: 20%;
	}

	@media (max-width: 1700px) {
		.bg-decorations {
			width : 10%;
		}
	}

	@media (max-width: 1350px) {
		.bg-decorations {
			display: none;
		}
	}

	a {
		color: inherit;
	}

	.article-link {
		color: inherit;
		text-decoration: none;
	}

	article {
		transition: .3s;
		display: flex;
		flex-direction: row;
		gap: 5%;
		padding: 1rem;
		margin-top: 3rem;
		box-shadow: #444444 -1px 3px 6px -5px;
		border-top: transparent 2px solid;
	}

	@media (max-width: 600px) {
		article {
			flex-direction: column;
		}
	}

	article:hover {
		transform: translateY(-5px);
		border-top: var(--color-theme-1) 2px solid;
		background-color: #f0f0f0f0;
		box-shadow: #444444 -1px 3px 6px -5px;
	}

	article > div {
		flex: 3;
	}

	time {
		opacity: .5;
	}

	h2 {
		margin: 0.5rem 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	article	img {
		flex: 2;
		max-height: 250px;
		overflow: hidden;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
