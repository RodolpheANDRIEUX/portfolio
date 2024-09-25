<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import Menu from "./menu.svelte";

	let tabs = [
		{ name: 'Home', url: '/' },
		{ name: 'Crafts', url: '/crafts' },
		{ name: 'blog', url: '/blog' },
		{ name: 'contact', url: '/contact' },
		{ name: 'about me', url: '/about' }
	];
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src="{logo}" alt="OW" />
		</a>
	</div>

	<nav>
		<ul>
			{#each tabs as tab}
				<li aria-current={$page.url.pathname === tab.url ? 'page' : undefined}>
					<a href="{tab.url}">{tab.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<Menu {tabs}/>
</header>

<style>
	header {
		display: flex;
		z-index: 10;
		padding: 1em clamp(0em, 2vw, 5em);
		justify-content: space-between;
		background-color: var(--color-theme-3);
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.logo img {
		margin-left: 3vw;
		height: 2.2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		view-transition-name: navbar;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		height: 3em;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		text-shadow: black 0 3px;
	}

	li[aria-current='page']::before {
		content: '';
		width: 100px;
		height: 20px;
		border-radius: 50px;
		position: absolute;
		top: calc(-1em - 15px);
		left: calc(50% - 50px);
		background-color: var(--color-bg-1);
		filter: blur(25px);
		view-transition-name: indicator;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2em;
		color: var(--color-bg-2);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: .2em;
		text-decoration: none;
	}

	@media (max-width: 900px) {
		ul {
			display: none;
		}
	}
</style>
