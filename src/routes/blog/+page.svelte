<script>
	export let data;
	import { formatDate } from '$lib/Utils.js';
	import images from '$lib/images/';

	function firstP(content) {
		const match = content.match(/<p>.*?<\/p>/);
		return match ? match[0] : '';
	}
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Un blog accessible de fou" />
</svelte:head>

<h1 class="visually-hidden">Un blog accessible de fou</h1>
<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset="{images}/coffee.webp" />
	<img aria-hidden="true" class="bg-decorations coffee1" src="{images}/coffee.png" alt="coffee" />
</picture>
<picture>
	<source media="(min-width: 1000px)" type="image/webp" srcset="/src/lib/images/coffee2.webp" />
	<img aria-hidden="true" class="bg-decorations coffee" src="/src/lib/images/coffee2.png" alt="more coffee" />
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
					<picture>
						<source media="(min-width: 600vh)" type="image/webp" srcset="/src/lib/images/{post.image.imageName}/{post.image.imageName}-365.webp" />
						<source type="image/webp" srcset="/src/lib/images/{post.image.imageName}/{post.image.imageName}-520.webp" />
						<img src="/src/lib/images/{post.image.imageName}/{post.image.imageName}.jpg" alt={post.image.imageAlt}
						style="view-transition-name: img{post.id};"/> <!-- Fallback -->
					</picture>
				{/if}
			</article>
		</a>
	{/each}
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

	picture {
		flex: 2;
		max-height: 250px;
		overflow: hidden;
	}

	article	img {
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
