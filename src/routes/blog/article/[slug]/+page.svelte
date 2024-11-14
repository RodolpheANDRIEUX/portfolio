<script>
    export let data;
    import { onMount } from 'svelte';
    import { formatDate } from '$lib/Utils.js';

    let button;
    let dialog;

    onMount(() => {
        button = document.querySelector('button');
        dialog = document.querySelector('dialog');

        if (button === null || dialog === null) {
            return;
        }

        dialog.addEventListener('click', () => {
            dialog.close();
        });
    });

</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content="Article de blog {data.title}" />
</svelte:head>

<section>
    <article>
        <h1 style="view-transition-name: {data.id}-content;">{data.title}</h1>
        <time datetime={data.date}>{formatDate(data.date)}</time>
        <p>{@html data.content}</p>

        {#if data.image}
            <dialog>
                <img src={data.image.imageName} alt={data.image.imageAlt}
                     style="view-transition-name: img{data.id};"/>
            </dialog>
            <button on:click={() => dialog.showModal()} on:keydown={(event) => { if (event.key === 'Enter') dialog.showModal(); }}>
                <img src={data.image.imageName} alt={data.image.imageAlt}
                     style="view-transition-name: img{data.id};"/>
            </button>
        {/if}
    </article>
</section>

<style>

    section {
        margin-bottom: 2rem;
    }

    article {
        margin: .3rem 0;
        max-width: 1140px;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 600;
        text-align: inherit ;
    }

    time {
        font-size: 1.2rem;
        font-weight: 300;
        opacity: .5;
    }

    #comment time {
        font-size: 1rem;
    }

    .h-flex-container {
        display: flex;
        align-items: end;
        margin-bottom: .8rem;
    }

    p {
        margin-top: 2rem;
        box-shadow: #444444 -3px 3px 6px -5px;
        backdrop-filter: blur(5px);
        border-left: var(--color-theme-1) 2px solid;
        padding: 1rem;
        line-height: 1.5;
    }

    h2 {
        margin:  0 0 2rem 0;
        font-size: 2rem;
        font-weight: 500;
    }

    h3 {
        margin: 0 1rem 0 .5rem;
    }

    #comment p {
        margin: 0 0 2rem 1rem;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    dialog {
        max-width: 95%;
        max-height: 90%;
        background-color: #aaaaaa40;
        backdrop-filter: blur(5px);
        border: 0;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        animation: fadeFromBottom .3s;
    }

    @keyframes fadeFromBottom {
        from {
            transform: translateY(10%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    dialog img {
        max-width: 89vw;
        max-height: 89vh;
    }

    img {
        max-width: 100%;
    }
</style>