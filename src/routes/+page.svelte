<script>
	import { fade } from 'svelte/transition';
	import {quadInOut} from "svelte/easing";
	import {onMount} from 'svelte';

	let display = false;
	onMount(() => {
		display = true;
	});
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

{#if display}
<div class="title" transition:fade={{ delay: 800, duration: 1000, easing: quadInOut }}>
	<h1>Hi, I'm Rodolphe ANDRIEUX </h1>
	<span>👋</span>
</div>
{/if}

<style>
	.title {
		display: flex;
		height: 60vh;
		justify-content: center;
		align-items: center;
	}

	span {
		margin-left: 10px;
		font-size: 3rem;
		animation: shake 3s  ease-in-out infinite;
	}

	@keyframes shake {
		0% { transform: translateX(0); }
		10% { transform: translateX(-10px) rotate(-15deg); }
		20% { transform: translateX(20px) rotate(5deg); }
		30% { transform: translateX(-10px) rotate(-15deg); }
		40% { transform: translateX(0); }
	}

	@media ( max-width : 500px) {
		.title h1{
			font-size: 1.5rem;
		}

	}
</style>