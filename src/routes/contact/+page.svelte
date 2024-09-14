<script>
	import { fade, slide } from "svelte/transition";

	let name = '';
	let mail = '';
	let message = '';
	let errorMessage = '';

	function validateForm(event) {
		if (!name || !mail || !message) {
			errorMessage = 'All fields are required.';
			return false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(mail)) {
			errorMessage = 'The email address is not valid.';
			return false;
		}

		return true;
	}
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me!" />
</svelte:head>

<section>
	<div id="container" in:fade={{ delay: 100, duration: 400 }}>
		<h1 in:slide={{ delay: 200, duration: 400 }}>Contact me</h1>
		{#if errorMessage}
			<p id="errorMessage" in:slide={{ duration: 400 }}>{errorMessage}</p>
		{/if}
		<form method="POST" on:submit|preventDefault={validateForm}>
			<div class="input-group">
				<input required bind:value={name} type="text" id="name" name="name" autocomplete="off" />
				<label for="name">Name</label>
			</div>
			<div class="input-group">
				<input required bind:value={mail} type="text" id="mail" name="mail" autocomplete="off" />
				<label for="mail">Mail</label>
			</div>
			<div class="input-group">
				<textarea required bind:value={message} id="message" name="message" autocomplete="off"></textarea>
				<label for="message">Message</label>
			</div>
			<button type="submit" in:slide={{ delay: 500, duration: 200 }}>Submit</button>
		</form>
	</div>
</section>


<style>

	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 2.8rem;
		font-weight: 600;
		letter-spacing: .2rem;
	}

	#container {
		margin-top: 5rem;
		border-top: var(--color-theme-1) 2px solid;
		background-color: #f0f0f0f0;
		box-shadow: var(--color-theme-3) -1px 3px 6px -5px;
		max-width: 600px;
		text-align: center;
		padding: 30px;
	}

	.input-group {
		position: relative;
		margin: 20px;
	}

	button {
		background-color: var(--color-theme-1);
		color: #fff;
		padding: 10px 20px;
		border: 2px solid transparent;
		cursor: pointer;
		transition: .3s;
	}

	button:hover {
		background: transparent;
		border-color: var(--color-theme-1);
		color: var(--color-theme-1);
	}

	input, textarea {
		width: 20rem;
		color: var(--color-theme-3);
		border: solid 2px #9e9e9e;
		background: none;
		padding: 1rem;
		font-size: 1rem;
		letter-spacing: .1rem;
		transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	textarea {
		height: 10rem;
		resize: none;
		letter-spacing: 0;
	}

	label {
		position: absolute;
		left: 1rem;
		color: #9e9e9e;
		letter-spacing: .1rem;
		pointer-events: none;
		transform: translateY(1rem);
		transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	input:focus, input:valid, textarea:focus, textarea:valid {
		outline: none;
		border: 2px solid var(--color-theme-1);
	}

	.input-group input:focus ~ label,
	.input-group input:valid ~ label,
	.input-group textarea:focus ~ label,
	.input-group textarea:valid ~ label {
		transform: translateY(-50%) scale(0.8);
		background-color: #f0f0f0;
		padding: 0 .2em;
		color: var(--color-theme-1);
	}

	#errorMessage {
		color: red;
		font-size: .8rem;
		margin: 15px 0 0 0 ;
		padding: 0;
	}
</style>