<script>
    import ynov from '$lib/images/ynov-logo.png';
    import github from '$lib/images/github.svg';
    import linkedin from '$lib/images/linkedin.svg';
</script>

<footer>
    <picture>
        <source type="image/webp" srcset="/src/lib/images/ynov-logo.webp">
        <img id="ynov-footer-logo" src='/src/lib/images/ynov-logo.png' alt="Logo d'ynov">
    </picture>
    <div id="flex-div">
        <p>© 2024 - Rodolphe ANDRIEUX</p>
        <div id="flex-icons">
            <a href="https://www.linkedin.com/in/rodolphe-andrieux" target="_blank">
                <img src={linkedin} alt="Logo LinkedIn" width="40" height="40">
            </a>
            <a href="https://github.com/RodolpheANDRIEUX" target="_blank">
                <img src={github} alt="Logo GitHub" width="40" height="40">
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #2e2e2e;
        color: var(--color-bg-0);
    }

    #flex-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer p {
        margin-bottom: 10px;
        padding: 0 1rem;
    }

    footer #flex-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
    }

    footer #ynov-footer-logo {
        padding: 0 30px;
        background: var(--color-bg-0);
        height: 110px;
        background-blend-mode: exclusion;
    }

    a {
        transition: transform .3s;
    }

    a:hover {
        transform: scale(1.2);
    }
</style>