<template>
    <div class="tech-icon">
        <i :class="iconClass" v-if="iconClass"></i>
        <img :src="iconImg" class="iconImg" v-if="iconImg" />
        <p>{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    iconClass: String,
    name: String,
    iconImg: String,
});
</script>

<style scoped>
.tech-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tech-icon i {
    font-size: 2rem;
}
.tech-icon p {
    margin-top: 0.5rem;
    font-size: 1rem;
}

.iconImg {
    width: 32px;
    height: 32px;
}
</style>
