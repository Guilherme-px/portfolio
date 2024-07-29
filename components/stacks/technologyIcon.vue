<template>
    <div class="tech-icon">
        <i :class="iconClass"></i>
        <p>{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    iconClass: String,
    name: String,
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
</style>
