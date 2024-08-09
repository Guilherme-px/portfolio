<template>
    <div class="parallax-container">
        <div class="container">
            <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
            <div class="text-container">
                <div class="home-text">
                    <h1>Olá, me chamo Guilherme</h1>
                    <h2>
                        <span class="typed-text">{{ typeValue }}</span>
                        <span class="cursor" :class="{ typing: typeStatus }"
                            >&shy;</span
                        >
                    </h2>
                </div>
            </div>
        </div>
        <About />
        <Stacks />
        <Projects />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { type Container } from "tsparticles-engine";
import { ref, onMounted } from "vue";
import About from "~/components/about/about.vue";
import Projects from "~/components/projects/projects.vue";
import Stacks from "~/components/stacks/stacks.vue";
import Footer from "~/components/footer/footer.vue";

const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = [
    "Sou um desenvolvedor web",
    "Fique à vontade para olhar os meus trabalhos",
    "Entre em contato e solicite um orçamento 😄",
];
const typeSpeed = 60;
const erasingSpeed = 25;
const newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;

const options = {
    fullScreen: {
        enable: false,
        zIndex: -1,
    },
    background: {
        image: "url('/imgs/Layout.jpg')",
        size: "cover",
        repeat: "no-repeat",
        position: "center",
    },
    particles: {
        color: {
            value: "#ff0000",
        },
        links: {
            color: "#fff",
            enable: true,
            distance: 120,
            opacity: 1,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 866.4828672705786,
            },
        },
        line_linked: {
            enable: true,
            distance: 191.92323070771698,
            color: "#000000",
            opacity: 0.4,
            width: 1,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    retina_detect: true,
};

const onLoad = (container: Container) => {
    container.pause();
    setTimeout(() => container.play(), 2000);
};

const typeText = () => {
    if (charIndex < typeArray[typeArrayIndex].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += typeArray[typeArrayIndex].charAt(charIndex);
        charIndex += 1;
        setTimeout(typeText, typeSpeed);
    } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay);
    }
};

const eraseText = () => {
    if (charIndex > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1);
        charIndex -= 1;
        setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus.value = false;
        typeArrayIndex += 1;
        if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0;
        setTimeout(typeText, typeSpeed + 1000);
    }
};

onMounted(() => {
    setTimeout(typeText, newTextDelay + 200);
});
</script>

<style scoped>
.parallax-container {
    background-image: url("/imgs/software-developer-bg.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#tsparticles {
    position: absolute;
    height: 100vh;
    width: 100%;
}

.container {
    height: 100vh;
    width: 100%;
}

.text-container {
    display: flex;
}

.home-text {
    color: #fff;
    padding: 150px 0px 0px 40px;
    z-index: 9999;
}

.home-text h1,
.home-text h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 30px;
}

h2 span.cursor {
    display: inline-block;
    align-content: center;
    vertical-align: middle;
    margin-left: 3px;
    width: 3px;
    height: 18px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
}

h2 span.cursor.typing {
    animation: none;
}

@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }
    50% {
        background-color: transparent;
    }
    99% {
        background-color: transparent;
    }
}
</style>
