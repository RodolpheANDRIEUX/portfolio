<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div id="logo">
		<a href="/">
			<img src={logo} alt="Blog" />
		</a>
	</div>

	<nav >

		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: var(--color-theme-3);
		view-transition-name: header;
	}

	#logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	#logo img {
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
		padding: 0 0 20px 0;
		margin: 0;
		height: 3em;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--width: 40px;
		--height: 5px;
		content: '';
		width: var(--width);
		height: var(--height);
		position: absolute;
		top: 0;
		left: calc(50% - var(--width) / 2);
		background-color: var(--color-theme-1);
		view-transition-name: indicator;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 10px 3em;
		color: var(--color-bg-0);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: .2em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

</style>
