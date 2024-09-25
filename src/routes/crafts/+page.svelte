<script>
    import noise from '$lib/images/crafts/noise.webp';
    import cube from '$lib/images/crafts/cube.png';
    import reigns from '$lib/images/crafts/reigns.png';

    let crafts = [
        { name: '3D cube', url: '/crafts/cube', img: cube },
        { name: 'Noise CSS filter', url: '/crafts/noise', img: noise },
        { name: 'Reigns card animation', url: '/crafts/reigns-card', img: reigns },
    ]
</script>

<section>
    {#each crafts as craft}
        <a href={craft.url} class="card">
            <img src={craft.img} alt={craft.name} />
            <p>{craft.name}</p>
        </a>
    {/each}
</section>


<style>
    section {
        columns: 310px;
        margin: 10px 0;
        gap: 10px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .card {
        background-color: #ffffff44;
        backdrop-filter: blur(8px);
        border-radius: 10px;
        box-shadow: 0 2px 4px #00000030;
        transition: .3s;
        display: flex;
        flex-direction: column;
        break-inside: avoid;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .card p {
        margin: 0;
        padding: 10px;
        font-weight: 700;
    }

    .card:hover {
        transform: translate(0, -4px);
    }

    .card:active {
        transform: translate(0, 0);
    }
</style>