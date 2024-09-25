<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Canvas from './canvas.svelte';
	import './styles.css';
	import { onNavigate } from "$app/navigation";
	import { fade } from "svelte/transition";
	import {quadInOut, quintOut} from "svelte/easing";
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => ready = true);

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((fulfill) => {
			document.startViewTransition(() => new Promise(fulfill));
		});
	});
</script>

{#if ready}
	<div class="app" transition:fade={{ delay: 200, duration: 1000, easing: quadInOut  }}>
		<Header />

		<main transition:fade={{ delay: 1200, duration: 1000, easing: quadInOut }}>
			<Canvas />
			<slot />
		</main>

		<Footer />
	</div>
{/if}

<style>
	.app {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.app::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url("../lib/images/noise.png");
		background-size: 64px 64px;
		background-repeat: repeat;
		opacity: 0.08;
		z-index: -1;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		max-width: 72rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
