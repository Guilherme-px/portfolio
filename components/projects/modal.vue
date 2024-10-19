<template>
    <UModal v-model="isOpen" fullscreen @close="handleClose">
        <UCard
            :ui="{
                ring: '',
                divide: 'divide-y divide-red-100 dark:divide-red-800',
            }"
        >
            <template #header>
                <div class="flex items-center justify-between">
                    <div
                        class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                        <h3>{{ project.name }}</h3>
                    </div>
                    <UButton
                        color="gray"
                        variant="ghost"
                        icon="i-heroicons-x-mark-20-solid"
                        class="-my-1"
                        @click="handleClose"
                    />
                </div>
            </template>
            <div class="modal-content">
                <div>
                    <img
                        :src="project.image"
                        alt="Project Image"
                        class="modal-image"
                    />
                </div>
                <div class="modal-text-buttons-container">
                    <div class="modal-text">
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="modal-buttons">
                        <a
                            v-if="project.siteLink"
                            :href="project.siteLink"
                            target="_blank"
                            class="button"
                            >Visitar Site</a
                        >
                        <a
                            v-if="project.githubLink"
                            :href="project.githubLink"
                            target="_blank"
                            class="button"
                            >GitHub</a
                        >
                        <a
                            v-if="project.githubLinkAPI"
                            :href="project.githubLinkAPI"
                            target="_blank"
                            class="button"
                            >GitHub (API)</a
                        >
                    </div>
                </div>
            </div>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
    project: {
        name: string;
        description: string;
        image: string;
        siteLink?: string;
        githubLink?: string;
        githubLinkAPI?: string;
    };
    isOpen: boolean;
}>();

const emits = defineEmits(["update:isOpen"]);

const isOpen = ref(props.isOpen);

watch(
    () => props.isOpen,
    (newVal) => {
        isOpen.value = newVal;
    }
);

const handleClose = () => {
    emits("update:isOpen", false);
};
</script>

<style scoped>
.modal-content {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 20px;
    gap: 60px;
    background-image: #0b101a;
    border-radius: 5px;
}

.modal-image {
    width: 1520px;
    border-radius: 8px;
}

.modal-text-buttons-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.modal-text {
    flex: 1;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.button {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #ff0000;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}

.button:hover {
    background-color: #ff0000;
    box-shadow: 0 0 15px 5px #8b0000cc;
}

@media (max-width: 1117px) {
    .modal-content {
        flex-direction: column;
        gap: 20px;
    }

    .modal-image {
        width: 100%;
        height: auto;
    }

    .modal-buttons {
        align-items: center;
        margin-top: 50px;
        justify-content: center;
    }
}
</style>
