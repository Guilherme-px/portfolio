<template>
    <div class="video-container">
        <iframe
            v-if="isYouTube"
            :src="embedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
        <video
            v-else
            ref="videoRef"
            class="video-js vjs-default-skin vjs-fluid"
            controls
            muted
            preload="auto"
            :data-setup="JSON.stringify(videoOptions)"
        >
            <source :src="src" type="video/mp4" />
            Seu navegador não suporta o vídeo.
        </video>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import type Player from "video.js/dist/types/player";

const props = defineProps<{
    src: string;
}>();

const isYouTube = computed(
    () => props.src.includes("youtube.com") || props.src.includes("youtu.be")
);

const embedUrl = computed(() => {
    const url = props.src;
    if (url.includes("youtube.com")) {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be")) {
        const videoId = url.split("/").pop();
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return "";
});

const videoRef = ref<HTMLVideoElement>();
let player: Player;

const videoOptions = {
    responsive: true,
    fluid: true,
    controlBar: {
        volumePanel: false,
        pictureInPictureToggle: false,
        playbackRateMenuButton: false,
        audioTrackButton: false,
        chaptersButton: false,
        descriptionsButton: false,
        remainingTimeDisplay: true,
        progressControl: true,
        fullscreenToggle: true,
    },
};

onMounted(() => {
    if (!isYouTube.value && videoRef.value) {
        player = videojs(videoRef.value, videoOptions);
    }
});

onBeforeUnmount(() => {
    if (player) {
        player.dispose();
    }
});
</script>

<style scoped>
.video-container {
    width: 100%;
    height: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    margin-top: 30px;
}

iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
</style>
