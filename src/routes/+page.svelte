<script>

</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="" content="" />
</svelte:head>

<div class="title">
	<h1>Hi, I'm Rodolphe ANDRIEUX </h1>
	<span>👋</span>
</div>

<div class="cube-container">
	<div class="cube">
		<div class="face front">Hello</div>
		<div class="face back">you'll never see...</div>
		<div class="face right">World</div>
		<div class="face left">...this anyway :)</div>
		<div class="face top">My Portfolio</div>
		<div class="face bottom">Welcome to</div>
	</div>
</div>

<style>
	.title {
		display: flex;
		justify-content: center;
	}

	span {
		margin-left: 10px;
		font-size: 3rem;
		align-self: center;
		animation: shake 3s  ease-in-out infinite;
	}

	@keyframes shake {
		0% { transform: translateX(0); }
		10% { transform: translateX(-10px) rotate(-15deg); }
		20% { transform: translateX(20px) rotate(5deg); }
		30% { transform: translateX(-10px) rotate(-15deg); }
		40% { transform: translateX(0); }
	}

	.cube-container {
		width: 200px;
		height: 200px;
		perspective: 800px;
		margin: auto auto;
		transition: 0.8s ease-out;
	}

	.cube-container:hover {
		transform: scale(2);
	}

	.cube {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		animation: rotate 8s infinite linear;
	}

	.face {
		--french: linear-gradient(
				to right,
				#0000ff,
				#ffffff,
				#ffffff,
				#ffffff,
				#ff0000
		)
		1;
		position: absolute;
		width: 200px;
		height: 200px;
		color: white;
		font-size: 18px;
		text-align: center;
		line-height: 200px;
		background: #000000cc;
		border: 2px solid;
		border-image: var(--french);
	}

	.front {
		transform: translateZ(100px);
	}

	.back {
		transform: rotateY(180deg) translateZ(100px);
	}

	.right {
		transform: rotateY(90deg) translateZ(100px);
	}

	.left {
		transform: rotateY(-90deg) translateZ(100px);
	}

	.top {
		transform: rotateX(90deg) translateZ(100px);
	}

	.bottom {
		transform: rotateX(-90deg) translateZ(100px);
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0) rotateY(0) rotateZ(0);
		}

		100% {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}
	}

</style>