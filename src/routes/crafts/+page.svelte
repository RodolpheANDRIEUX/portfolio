<script>
    import { fly } from 'svelte/transition';
    import {quadOut} from "svelte/easing";

    let crafts = [
        { name: '3D cube', url: '/crafts/cube', img: '/crafts/cube.png' },
        { name: 'Noise CSS filter', url: '/crafts/noise', img: '/crafts/noise.webp' },
        { name: 'Reigns card animation', url: '/crafts/reigns-card', img: '/crafts/reigns.png' },
    ]
</script>

<section>
    {#each crafts as craft, i}
        <a href={craft.url} class="card" in:fly|global={{
            delay: 100 * i,
            duration: 300,
            easing: quadOut,
            y: 50,
            }}>
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