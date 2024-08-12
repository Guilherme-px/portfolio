<template>
    <header :class="{ scrolled: (isScrolled && !isHome) || menuOpen }">
        <div class="logo">
            <img src="~/public/imgs/logo.png" alt="" />
        </div>
        <div class="menu-icon" @click="toggleMenu">
            <i :class="menuOpen ? 'fas fa-x' : 'fas fa-bars'"></i>
        </div>
        <nav :class="{ open: menuOpen }">
            <ul>
                <li><a href="#inicio" @click="closeMenu">Início</a></li>
                <li><a href="#sobre" @click="closeMenu">Sobre</a></li>
                <li>
                    <a href="#tecnologias" @click="closeMenu">Tecnologias</a>
                </li>
                <li><a href="#projetos" @click="closeMenu">Projetos</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const menuOpen = ref(false);
const isHome = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

const checkInitialScroll = () => {
    const hash = window.location.hash;
    isScrolled.value = window.scrollY > 0 && hash !== "#inicio";
    isHome.value = hash === "#inicio";
};

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
    menuOpen.value = false;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    checkInitialScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s, color 0.3s;
    background-color: transparent;
    color: white;
    z-index: 100000;
}

header.scrolled {
    background-color: #111111e6;
}

.logo img {
    width: 50px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-right: 20px;
}

nav ul li a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    color: #ff0000;
}

.menu-icon {
    display: none;
    cursor: pointer;
    font-size: 24px;
    color: #fff;
    transition: transform 0.3s;
    margin-right: 20px;
}

.menu-icon i:hover {
    color: #ff0000;
}

.menu-icon i {
    transition: transform 0.3s ease;
}

.menu-icon i.fa-x {
    transform: rotate(180deg);
}

@media (max-width: 768px) {
    header {
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
    }

    .menu-icon {
        display: block;
    }

    nav {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #111111e6;
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 20px 0;
    }

    nav.open {
        display: flex;
    }

    nav ul {
        flex-direction: column;
        gap: 20px;
    }

    nav ul li {
        padding: 5px 0;
        text-align: center;
    }

    nav ul li a {
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    nav ul li a {
        font-size: 16px;
    }
}
</style>
