<script>
	import {fade, slide} from "svelte/transition";
	import {onMount} from "svelte";

	let fields = {
		'username': '',
		'mail': '',
		'password': '',
		'confirm password': ''
	};

	function updateValue(fieldKey, value) {
		fields[fieldKey] = value;
	}

	let fieldStates = {};
	let errorMessage = '';

	async function validateForm(event) {

		for (let key in fields) {
			if (!fields[key]) {
				errorMessage = `${key}  is required`;
				return false;
			}
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(fields.mail)){
			errorMessage = 'The email address is not valid.';
			return false;
		}

		if (!fields.mail.includes('@')) {
			errorMessage = 'The email address is not valid.';
			return false;
		}

		const hasUppercase = /[A-Z]/.test(fields.password);
		const hasLowercase = /[a-z]/.test(fields.password);
		const hasDigits = /\d/.test(fields.password);

		if (fields.password.length < 8) {
			errorMessage = 'The password must be at least 8 characters long';
			return false;
		}

		if (fields.password !== fields['confirm password']) {
			errorMessage = 'Passwords do not match.';
			return false;
		}

		errorMessage = 'ok fine, you can log in now 😉';
		return true;
	}

	function determineInputType(fieldKey) {
		return fieldKey.includes('password') ? 'password' : 'text';
	}

	onMount(() => {
		document.getElementById('username').focus();
	});
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me !" />
</svelte:head>

<section>
	<div id="container" in:fade={{ delay: 100, duration: 400 }}>
		<h1 in:slide={{ delay: 200, duration: 400 }}>Contact me</h1>
		{#if errorMessage}
			<p id="errorMessage" in:slide={{ duration: 400 }}>{errorMessage}</p>
		{/if}
		<form method="POST" on:submit|preventDefault={validateForm}>
			{#each Object.keys(fields) as fieldKey}
				<div class="input-group">
					<input value={fields[fieldKey]}
						   on:input={(e) => updateValue(fieldKey, e.target.value)}
						   class:focus-or-filled={fieldStates[fieldKey]}
						   on:focus={() => (fieldStates[fieldKey] = true)}
						   on:blur={() => (fieldStates[fieldKey] = fields[fieldKey] !== "")}
						   type={determineInputType(fieldKey)}
						   id={fieldKey} name={fieldKey} autocomplete="off" />
					<label for={fieldKey}>{fieldKey}</label>
				</div>
			{/each}
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

	input {
		width: 20rem;
		max-width: 60vw;
		color: var(--color-theme-3);
		border: solid 2px #9e9e9e;
		background: none;
		padding: 1rem;
		font-size: 1rem;
		letter-spacing: .1rem;
		transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
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

	.focus-or-filled {
		outline: none;
		border: 2px solid var(--color-theme-1);
	}

	.focus-or-filled ~ label {
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