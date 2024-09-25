<svelte:head>
    <title>Noise</title>
    <meta name="" content="Experimenting with different methods to apply noise to a div" />
</svelte:head>

<section>
    <div class="tech1">
        <p>
            ::after &#123;<br>
            content: "";<br>
            position: absolute;<br>
            background: url("./noise.svg") repeat;<br>
            opacity: .4;<br>
            &#125;
        </p>
    </div>
    <div class="tech2">
        <p>
            ::after &#123;<br>
            content: "";<br>
                position: absolute;<br>
                background: url("./noise.svg") repeat;<br>
                opacity: .4;<br>
                filter: blur(0.5px);<br>
            &#125;
        </p>
    </div>
    <div>
        <p>
            No filter
        </p>
    </div>
    <div class="tech3">
        <p>
            ::after &#123;<br>
            content: "";<br>
                position: absolute;<br>
                background: url("./noise.svg") repeat;<br>
                mix-blend-mode: multiply;<br>
            &#125;
        </p>
    </div>
    <div class="tech4">
        <p>
            ::after &#123;<br>
            content: "";<br>
                position: absolute;<br>
                background: url("./noise.svg") repeat;<br>
                mix-blend-mode: overlay;<br>
            &#125;
        </p>
    </div>
</section>

<style>
    section {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0 0;
        z-index: -1;
    }

    div {
        background: url("./photo.jpg") no-repeat center left;
        background-size: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    div p {
        margin: 80px 10px;
        font-size: 1.5rem;
        color: white;
    }

    .tech1::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20%;
        height: 100%;
        background: url("./noise.svg") repeat;
        opacity: .4;
    }

    .tech2::after {
        content: "";
        position: absolute;
        top: 0;
        left: 20%;
        width: 20%;
        height: 100%;
        background: url("./noise.svg") repeat;
        opacity: .4;
        filter: blur(0.5px);
    }

    .tech3::after {
        content: "";
        position: absolute;
        top: 0;
        left: 60%;
        width: 20%;
        height: 100%;
        background: url("./noise.svg") repeat;
        mix-blend-mode: multiply;
    }

    .tech4::after {
        content: "";
        position: absolute;
        top: 0;
        left: 80%;
        width: 20%;
        height: 100%;
        background: url("./noise.svg") repeat;
        mix-blend-mode: overlay;
    }

</style>