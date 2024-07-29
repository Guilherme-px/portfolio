<template>
    <div class="tecs-page">
        <div class="tecs-title">
            <div class="tecs-title_border">
                <h3>Tecnologias</h3>
            </div>
        </div>
        <div class="tecs-description">
            <span>Algumas das tecnologias com as quais trabalho.</span>
        </div>
        <div class="tecs-section">
            <div class="tecs-description_title">
                <span>Linguagens</span>
            </div>
            <div class="tecs-container_border">
                <div class="tecs-container">
                    <TechnologyIcon
                        v-for="(tecsLang, index) in tecsLangs"
                        :key="index"
                        :iconClass="tecsLang.iconClass"
                        :name="tecsLang.name"
                    />
                </div>
            </div>
        </div>
        <div class="tecs-section">
            <div class="tecs-description_title">
                <span>Ferramentas</span>
            </div>
            <div class="tecs-tools-wrapper">
                <div
                    v-for="(chunk, chunkIndex) in chunkedTecsTools"
                    :key="chunkIndex"
                    class="tecs-container_border"
                >
                    <div class="tecs-container">
                        <TechnologyIcon
                            v-for="(tecsTool, index) in chunk"
                            :key="index"
                            :iconClass="tecsTool.iconClass"
                            :name="tecsTool.name"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import TechnologyIcon from "./technologyIcon.vue";

interface TecItem {
    iconClass: string;
    name: string;
}

const tecsLangs: TecItem[] = [
    { iconClass: "devicon-javascript-plain colored", name: "Javascript" },
    { iconClass: "devicon-typescript-plain colored", name: "Typescript" },
    { iconClass: "devicon-csharp-plain colored", name: "C#" },
];

const tecsTools: TecItem[] = [
    { iconClass: "devicon-git-plain colored", name: "Git" },
    { iconClass: "devicon-vuejs-plain colored", name: "Vue.js" },
    { iconClass: "devicon-react-plain colored", name: "React" },
    { iconClass: "devicon-nuxtjs-plain colored", name: "Nuxt.js" },
    { iconClass: "devicon-nextjs-plain", name: "Next.js" },
    { iconClass: "devicon-html5-plain colored", name: "HTML5" },
    { iconClass: "devicon-css3-plain colored", name: "Css3" },
    { iconClass: "devicon-sass-original colored", name: "Sass" },
    { iconClass: "devicon-tailwindcss-original colored", name: "Tailwindcss" },
    { iconClass: "devicon-express-original colored", name: "Express" },
    { iconClass: "devicon-dotnetcore-plain colored", name: "Dotnet" },
    { iconClass: "devicon-mysql-original colored", name: "Mysql" },
    { iconClass: "devicon-mongodb-plain colored", name: "Mongodb" },
    { iconClass: "devicon-nodejs-plain-wordmark colored", name: "Nodejs" },
    {
        iconClass: "devicon-amazonwebservices-plain-wordmark colored",
        name: "AWS",
    },
    { iconClass: "devicon-jest-plain colored", name: "Jest" },
    { iconClass: "devicon-vitest-plain colored", name: "Vitest" },
    { iconClass: "devicon-docker-plain colored", name: "Docker" },
    { iconClass: "devicon-npm-original-wordmark colored", name: "Npm" },
    { iconClass: "devicon-bun-plain colored", name: "Bun" },
];

const isMobile = ref(false);

const chunkArray = (array: TecItem[], size: number): TecItem[][] => {
    const chunkedArr: TecItem[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
};

const chunkedTecsTools = computed(() => {
    return isMobile.value ? chunkArray(tecsTools, 5) : [tecsTools];
});

const handleResize = () => {
    isMobile.value = window.innerWidth <= 1150;
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.tecs-page {
    background-image: url("/imgs/code.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    padding: 20px;
    height: 100%;
    font-family: Arial, sans-serif;
    text-align: center;
}

.tecs-title {
    margin-bottom: 20px;
    margin-top: 40px;
}

.tecs-title_border {
    border: solid #ff0000 4px;
    border-radius: 25px;
    display: inline-block;
    box-shadow: 0 0 15px 5px rgba(255, 0, 0, 0.8);
}

h3 {
    color: #fff;
    text-align: center;
    padding: 10px 25px;
}

.tecs-description {
    font-size: 18px;
    font-weight: 600;
    margin-block: 60px;
}

.tecs-section {
    margin-bottom: 80px;
    margin-inline: 200px;
}

.tecs-description_title {
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
}

.tecs-container {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-inline: 50px;
}

.tecs-container_border {
    border: solid #ff0000 1px;
    padding-block: 40px;
    max-width: 100%;
    width: max-content;
    margin: 0 auto;
}

.tecs-tools-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media (max-width: 1150px) {
    .tecs-section {
        margin-inline: 50px;
    }
    .tecs-container {
        margin-inline: 20px;
        justify-content: space-evenly;
    }
    .tecs-tools-wrapper {
        flex-direction: column;
    }
    .tecs-container_border {
        width: 100%;
    }
}
</style>
