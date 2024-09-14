<script>
	import {fade, slide} from "svelte/transition";
</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About me !" />
</svelte:head>

<header>
	<h1>À propos de Rodolphe ANDRIEUX</h1>
	<p><strong>Développeur Full Stack Junior | Ancien sous-officier de l'Armée de l'Air et de l'Espace</strong></p>
</header>

<main>
	<article>
		<h2>Profil Professionnel</h2>
		<p>Fort de plus de 5 ans d'expérience professionnelle, je combine une expertise technique en développement full stack avec des compétences avancées en gestion d'équipe, acquises dans des environnements exigeants, notamment au sein de l'Armée de l'Air et de l'Espace française. Actuellement étudiant à YNOV Toulouse, je suis passionné par l'innovation en informatique, le développement personnel et la gestion de projet.</p>
	</article>

	<article>
		<h2>Réalisations Clés</h2>
	</article>

	<article>
		<h2>Compétences Spécialisées</h2>
	</article>

	<article>
		<h2>Formation</h2>
		<p>Actuellement en formation de Développeur Full Stack à YNOV Toulouse, alliant théorie et pratique pour une compréhension approfondie des technologies modernes.</p>
	</article>
</main>

<footer>
	<p>N'hésitez pas à me contacter pour discuter d'opportunités d'alternance ou de stage. Je suis impatient de mettre mes compétences au service de projets innovants et de continuer à grandir professionnellement.</p>
</footer>


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

	h2 {
		margin-top: 2rem;
		font-size: 2rem;
		font-weight: 500;
	}

	#container {
		margin-top: 5rem;
		border-top: var(--color-theme-1) 2px solid;
		background-color: #f0f0f0f0;
		box-shadow: var(--color-theme-3) -1px 3px 6px -5px;
		width: min(75%, 1200px);
		text-align: center;
		padding: 30px;
	}
</style>