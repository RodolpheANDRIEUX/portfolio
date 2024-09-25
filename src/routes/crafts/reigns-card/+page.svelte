<script>
    import {fade, fly} from 'svelte/transition';
    import {onMount} from 'svelte';
    import {cubicOut} from "svelte/easing";
    import king from "./king.png"

    let option = '';
    let question = "Where do you want to go ?";
    let answer = '';
    let link = '';
    let step = 0;
    let mouseX;
    let mouseY;

    // cardframe
    let initialRotation = 0;
    let rotation = 0;
    let Yrotation = 0;
    let Xrotation = 0;
    let targetTranslateX = 0;
    let targetTranslateY = 0;
    let targetRotation = 0;
    let currentTranslateX = -50;
    let currentTranslateY = 0;
    let initialTranslateX = 0;
    let initialTranslateY = 0;

    // animation
    const duration = 400;
    let startTime;
    let isAnimating = false;
    let isVisible = true;
    let questionVisible = true;


    // theme

    onMount(() => {
        // event listeners
        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('click', click);
    });

    // throw card animation
    async function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        rotation = initialRotation + (initialRotation * 10 - initialRotation) * progress;
        currentTranslateX = initialTranslateX + (targetTranslateX - initialTranslateX) * progress;
        currentTranslateY = initialTranslateY + (targetTranslateY - initialTranslateY) * easeInBack(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            startTime = null;
            questionVisible = true;
            isVisible = false;
            resetCardPos();
            let screenWidth = window.innerWidth;
            defineOption(1 - (mouseX / screenWidth));
            requestAnimationFrame(newCard)
        }
    }

    // reset card position in the center after throwing it and before turning a new one
    function resetCardPos() {
        rotation = 0;
        Yrotation = 180;
        currentTranslateX = -50;
        currentTranslateY = 0;
    }

    // pour x etant la position du curseur sur l'axe X allant de 0 à 1
    function defineOption(x){
        if (step === 0) {
            option = x > 0.5 ? "Home" : "Crafts";
        } else {
            option = x > 0.5 ? "Yes" : "No";
        }
    }

    // turn a new card animation
    function newCard(timestamp) {
        isVisible = true;
        if (!startTime) startTime = timestamp;

        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const percentageX = 1 - (mouseX / screenWidth);
        targetRotation = lerp(-50, 50, percentageX) / 3.5;
        targetTranslateX = -50 - targetRotation * 2;
        targetTranslateY = (mouseY / screenHeight)*100 -50;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const XrotMovement = 60;

        Yrotation = 180 + (easeInOut(progress) * 180)
        if ( progress < 0.5 ){
            initialRotation = targetRotation * easeInOut(progress*2) * -1;
            initialTranslateX =  -50 + 30 * easeInOut(progress*2) * -2;
            initialTranslateY =  50 * easeInOut(progress*2);
            Xrotation = XrotMovement * easeInOut(progress*2);
            rotation = initialRotation
            currentTranslateX =  initialTranslateX;
            currentTranslateY =  initialTranslateY;
        } else {
            let progressSecondPart = (progress - 0.5) * 2
            Xrotation = XrotMovement - XrotMovement * easeInOut(progressSecondPart);
            rotation = initialRotation + (targetRotation - initialRotation) * easeInOut(progressSecondPart);
            currentTranslateX = initialTranslateX + (targetTranslateX - initialTranslateX) * easeInOut(progressSecondPart);
            currentTranslateY = initialTranslateY + (targetTranslateY - initialTranslateY) * easeInOut(progressSecondPart);
        }

        if (progress < 1) {
            requestAnimationFrame(newCard);
        } else {
            startTime = null;
            isAnimating = false
        }
    }

    function handleMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if(isAnimating) return;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const percentageX = 1 - (mouseX / screenWidth);

        // update card position
        currentTranslateX = -50 - rotation*2;
        currentTranslateY = (mouseY / screenHeight)*100 -50;
        rotation = lerp(-50, 50, percentageX) / 3.5;
        defineOption(percentageX);
    }

    function click(event){
        if (event.clientY <= 60) return; // click on the header disabled
        if(isAnimating) return;

        const screenWidth = window.innerWidth;
        const mouseX = event.clientX;
        const percentageX = 1 - (mouseX / screenWidth);
        if (percentageX > 0.36 && percentageX < 0.64) return; // click on the middle of the card disabled

        // getting initial values to launch animation
        isAnimating = true;
        initialRotation = rotation;
        initialTranslateX = currentTranslateX;
        initialTranslateY = currentTranslateY;
        targetTranslateX = -50 + ((currentTranslateX + 50) * 8);
        targetTranslateY = 600;

        questionVisible = false;
        percentageX > 0.5 ? swapLeft() : swapRight()
        requestAnimationFrame(animate); // launch animation
    }

    async function swapLeft(){
        if (step === 0) {
            step = 1;
            answer = "home";
            link = "/";
            question = "You sure you want to go back " + answer + " ?";
        } else {
            window.location.href = link;
        }
    }

    async function swapRight(){
        if (step === 0) {
            step = 1;
            answer = "Crafts";
            link = "/crafts";
            question = "You sure you want to go back to " + answer + " ?";
        } else {
            question = "Where do you want to go ?";
            step = 0;
        }
    }

    function easeInOut(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
    }

    function lerp(a, b, t) {
        return a + easeInOut(t) * (b - a);
    }

    function easeInBack(t) {
        let jump = (-initialTranslateY + 50) * 0.02;
        return t * ((jump + 1) * t - jump);
    }
</script>

<svelte:head>
    <title>Reigns card CSS</title>
    <meta name="" content="Reproduced reigns card animation using CSS and JS" />
</svelte:head>

<h2>Ca marche pas sur tel sorry</h2>

{#if questionVisible}
    <span class="question" transition:fly={{ y: -50, duration: 300, easing: cubicOut }}>{question}</span>
{/if}

<div id="cardDeck" class="card backCard"></div>

{#if isVisible }
    <div id="outer-card">
        <div class="card" id="cardFrame" style="transform: translate({currentTranslateX}%, {currentTranslateY}px) rotate({-rotation}deg) rotateY({Yrotation}deg) rotateX({Xrotation}deg);">
            <div id="front">
                <div id="face" style="background-image: url({king});">
                    {#if !isAnimating}
                        <div id="answerOverlay" transition:fade={{ duration: 200 }}
                             style="transform: translate(-25%, {-100 + (Math.abs(rotation * 3))}%) rotate({rotation}deg);">
                            <span id="answer" style="transform: translate(-50%, 0);">{option}</span>
                        </div>
                    {/if}
                </div>
            </div>
            <div id="back" class="backCard"></div>
        </div>
    </div>
{/if}


<style>
    .question {
        position: fixed;
        top: 15vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        font-size: 2.2rem;
        font-weight: 600;
        text-align: center;
    }

    #outer-card {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        perspective: 50vw;
    }

    .card {
        position: fixed;
        height: min(50vh, 50vw);
        width: min(50vh, 50vw);
        border-radius: 3vh;
        left: 50vw;
        top: 30vh;
        transform: translate(-50%, 0);
        transition: 80ms ease-out;
    }

    #cardFrame {
        transform-style: preserve-3d;
    }

    #front,
    #back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    #front {
        transform: rotateY(0deg);
        overflow: hidden;
        border-radius: 3vh;
    }

    #back {
        transform: rotateY(180deg);
    }

    .backCard {
        background-size: 50%;
        background: var(--color-bg-0) url("./card.svg") no-repeat center;
        border-radius: 3vh;
        box-shadow: inset 0 0 0 8px #13131380;
    }

    #face {
        height: 100%;
        width: 100%;
        background: #9e9e9e center;
        background-size: cover;
        backface-visibility: hidden;
    }

    #answerOverlay {
        position: absolute;
        height: 100%;
        width: 200%;
        top: 0;
        left: 0;
        background: #00000080;
        text-align: center;
        color: #fff;
        transition: 80ms ease-out;
    }

    #answer {
        position: absolute;
        bottom: 10%;
        left: 50%;
        font-size: 2rem;
        font-weight: 600;
    }

    h2 {
        display: none;
        text-align: center;
        font-size: 2rem;
    }

    @media only screen and (max-width: 767px) {
        * {
            display: none;
        }

        h2 {
            display: block;
        }
    }
</style>