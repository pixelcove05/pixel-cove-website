
/* =========================================
   PIXEL COVE — SIGNATURE LIQUID ART
   Chrome | Fluid Motion | Orange Reflections
========================================= */

const container = document.getElementById("liquidContainer");
const loader = document.getElementById("loader");

/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hidden"), 900);
});

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});

/* =========================================
   CHROME REFLECTION ENVIRONMENT
========================================= */

function createChromeEnvironment() {

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;

    const ctx = canvas.getContext("2d");

    // Dark studio environment
    const background = ctx.createLinearGradient(0, 0, 0, 512);

    background.addColorStop(0, "#08080b");
    background.addColorStop(0.5, "#292a30");
    background.addColorStop(1, "#050506");

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, 1024, 512);

    // Large silver reflection panels
    const panels = [
        { x: 80, w: 130 },
        { x: 300, w: 95 },
        { x: 530, w: 160 },
        { x: 850, w: 100 }
    ];

    panels.forEach((panel, index) => {

        ctx.save();

        ctx.translate(panel.x, 0);
        ctx.rotate(index % 2 === 0 ? -0.12 : 0.12);

        const shine = ctx.createLinearGradient(
            0, 0, panel.w, 0
        );

        shine.addColorStop(0, "rgba(255,255,255,0)");
        shine.addColorStop(0.3, "rgba(190,205,225,0.45)");
        shine.addColorStop(0.5, "rgba(255,255,255,1)");
        shine.addColorStop(0.7, "rgba(190,205,225,0.45)");
        shine.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = shine;
        ctx.fillRect(0, 0, panel.w, 512);

        ctx.restore();
    });

    // Orange reflective strip
    const orange = ctx.createLinearGradient(0, 0, 0, 512);

    orange.addColorStop(0, "rgba(255,77,0,0)");
    orange.addColorStop(0.3, "rgba(255,77,0,0.3)");
    orange.addColorStop(0.5, "rgba(255,85,15,0.95)");
    orange.addColorStop(0.7, "rgba(255,77,0,0.3)");
    orange.addColorStop(1, "rgba(255,77,0,0)");

    ctx.fillStyle = orange;
    ctx.fillRect(720, 0, 45, 512);

    // Dark reflection bands
    ctx.fillStyle = "#09090c";
    ctx.fillRect(0, 0, 1024, 35);
    ctx.fillRect(0, 475, 1024, 37);

    const texture = new THREE.CanvasTexture(canvas);

    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.encoding = THREE.sRGBEncoding;

    return texture;
}

/* =========================================
   CREATE LIQUID ART
========================================= */

function createLiquidArt() {

    if (!container || !window.THREE) return;

    let renderer;

    try {

        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });

    } catch (error) {

        console.warn("WebGL unavailable:", error);
        return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        42,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.set(0, 0, 7);

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    /* =====================================
       ENVIRONMENT
    ===================================== */

    const environment = createChromeEnvironment();

    scene.environment = environment;

    /* =====================================
       LIGHTING
    ===================================== */

    scene.add(
        new THREE.AmbientLight(0xffffff, 0.35)
    );

    const keyLight = new THREE.DirectionalLight(
        0xffffff,
        2.5
    );

    keyLight.position.set(-3, 4, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
        0xbac9df,
        2
    );

    rimLight.position.set(4, 2, -3);
    scene.add(rimLight);

    const sideLight = new THREE.PointLight(
        0xff4d00,
        30,
        12
    );

    sideLight.position.set(3, 0, 2);
    scene.add(sideLight);

    const orangeSweep = new THREE.PointLight(
        0xff5a1f,
        45,
        9
    );

    orangeSweep.position.set(-2, 1, 3);
    scene.add(orangeSweep);

    const lowerLight = new THREE.PointLight(
        0xff7133,
        18,
        10
    );

    lowerLight.position.set(-2, -3, 2);
    scene.add(lowerLight);

    /* =====================================
       LIQUID CHROME MATERIAL
    ===================================== */

    const geometry = new THREE.SphereGeometry(
        1.45,
        160,
        128
    );

    const originalPositions =
        geometry.attributes.position.array.slice();

    const material = new THREE.MeshPhysicalMaterial({

        color: 0xdce3ec,

        metalness: 0.88,

        roughness: 0.12,

        clearcoat: 1,

        clearcoatRoughness: 0.035,

        envMapIntensity: 1.8

    });

    const liquid = new THREE.Mesh(
        geometry,
        material
    );

    liquid.position.set(1.8, 0.05, -0.5);

    scene.add(liquid);

    /* =====================================
       FLOATING PARTICLES
    ===================================== */

    const particleCount = 110;

    const particlePositions = new Float32Array(
        particleCount * 3
    );

    for (let i = 0; i < particleCount; i++) {

        particlePositions[i * 3] =
            (Math.random() - 0.5) * 9;

        particlePositions[i * 3 + 1] =
            (Math.random() - 0.5) * 7;

        particlePositions[i * 3 + 2] =
            (Math.random() - 0.5) * 3;
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3)
    );

    const particles = new THREE.Points(
        particleGeometry,

        new THREE.PointsMaterial({

            color: 0xff682b,

            size: 0.018,

            transparent: true,

            opacity: 0.6

        })
    );

    scene.add(particles);

    /* =====================================
       MOUSE INTERACTION
    ===================================== */

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    window.addEventListener("pointermove", event => {

        mouseX =
            (event.clientX / window.innerWidth - 0.5) * 2;

        mouseY =
            (event.clientY / window.innerHeight - 0.5) * 2;

    });

    /* =====================================
       RESPONSIVE LAYOUT
    ===================================== */

    function updateLayout() {

        const mobile = window.innerWidth < 650;

        liquid.scale.set(
            mobile ? 0.7 : 1.05,
            mobile ? 0.68 : 0.95,
            mobile ? 0.62 : 0.85
        );

        liquid.position.set(
            mobile ? 0.8 : 1.8,
            mobile ? -0.35 : 0.05,
            -0.5
        );

        camera.aspect =
            window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }

    window.addEventListener("resize", updateLayout);

    updateLayout();

    /* =====================================
       ORGANIC LIQUID DEFORMATION
    ===================================== */

    const clock = new THREE.Clock();

    const positionAttribute = geometry.attributes.position;

    function animate() {

        requestAnimationFrame(animate);

        const time = clock.getElapsedTime();

        const positions = positionAttribute.array;

        for (let i = 0; i < positions.length; i += 3) {

            const x = originalPositions[i];
            const y = originalPositions[i + 1];
            const z = originalPositions[i + 2];

            const length = Math.sqrt(
                x * x + y * y + z * z
            );

            const nx = x / length;
            const ny = y / length;
            const nz = z / length;

            // Flowing surface distortion
            const warp =
                Math.sin(nx * 2.2 + time * 0.35) * 0.35 +
                Math.cos(ny * 2.5 - time * 0.3) * 0.3;

            // Broad liquid folds
            const wave1 = Math.sin(
                nx * 3.0 + ny * 1.5 + warp + time * 0.55
            );

            const wave2 = Math.cos(
                ny * 3.5 - nz * 2.0 + warp - time * 0.4
            );

            const wave3 = Math.sin(
                nz * 3.2 + nx * 2.0 + time * 0.35
            );

            // Uneven organic extensions
            const lobe1 =
                Math.sin(nx * 4.5 + time * 0.3) *
                Math.cos(ny * 2.8);

            const lobe2 =
                Math.cos(nz * 4.0 - time * 0.25) *
                Math.sin(ny * 3.2);

            // Combined fluid movement
            const flow =
                wave1 * 0.13 +
                wave2 * 0.10 +
                wave3 * 0.08 +
                lobe1 * 0.11 +
                lobe2 * 0.075;

            const displacement = 1 + flow;

            positions[i] = x * displacement;
            positions[i + 1] = y * displacement;
            positions[i + 2] = z * displacement;
        }

        positionAttribute.needsUpdate = true;

        geometry.computeVertexNormals();

        /* =================================
           SCULPTURAL ANIMATION
        ================================= */

        targetX +=
            (mouseY * 0.12 - targetX) * 0.02;

        targetY +=
            (mouseX * 0.15 - targetY) * 0.02;

        liquid.rotation.x =
            targetX + Math.sin(time * 0.22) * 0.07;

        liquid.rotation.y =
            targetY + Math.sin(time * 0.17) * 0.1;

        liquid.rotation.z =
            Math.sin(time * 0.13) * 0.045;

        liquid.position.y =
            (window.innerWidth < 650 ? -0.35 : 0.05) +
            Math.sin(time * 0.5) * 0.055;

        /* MOVING ORANGE REFLECTIONS */

        sideLight.position.x =
            2.5 + Math.sin(time * 0.35) * 1.2;

        sideLight.position.y =
            Math.cos(time * 0.4) * 1.5;

        orangeSweep.position.x =
            Math.cos(time * 0.3) * 2.8;

        orangeSweep.position.y =
            Math.sin(time * 0.45) * 1.8;

        orangeSweep.position.z =
            2.5 + Math.sin(time * 0.25);

        /* PARTICLE MOVEMENT */

        particles.rotation.y = time * 0.01;

        renderer.render(scene, camera);
    }

    animate();
}

/* =========================================
   START EXPERIENCE
========================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        createLiquidArt
    );

} else {

    createLiquidArt();
}

/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(
    ".section-label, .about-content, .service-card, .project-card, .contact-content"
);

if ("IntersectionObserver" in window) {

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        observer.observe(element);
    });
}
