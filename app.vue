<template>
    <transition name="fade">
        <NuxtPage />
    </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});

function onEnter(el: Element) {}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    scroll-behavior: smooth;
}

.spinner-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background-color: #161515;
    opacity: 1;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid #ff0000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.content {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
