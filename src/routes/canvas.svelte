<script>
    import { onMount } from 'svelte';
    let canvas;
    let ctx;
    let particles = [];
    let numParticles = 100; // default
    let mouse = { x: 0, y: 0 };

    onMount(() => {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        numParticles = Math.floor(window.innerWidth / 20); // real particle number

        for (let i = 0; i < numParticles; i++) {
            particles.push(createParticle());
        }

        addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        requestAnimationFrame(animate);
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5),
            vy: (Math.random() - 0.5),
            radius: Math.random() * 3 + 1,
        };
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
            if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

            // ctx.beginPath();
            // ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
            // ctx.fillStyle = `#444444`;
            // ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(100, 100, 100, ${1 - dist / 100})`;
                    ctx.stroke();
                }
            }

            let distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (distMouse < 200) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(100, 100, 100, ${1 - distMouse / 200})`;
                ctx.stroke();
            }
        }

        requestAnimationFrame(animate);
    }
</script>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;

    }
</style>

<canvas bind:this={canvas}></canvas>
