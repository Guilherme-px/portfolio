<template>
    <div id="projetos">
        <div class="projects-page">
            <div class="projects-title">
                <div class="projects-title_border">
                    <h4>Projetos</h4>
                </div>
            </div>
            <div class="content">
                <swiper
                    :effect="'cards'"
                    :grabCursor="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide
                        v-for="(project, index) in projects"
                        :key="index"
                        @click="openModal(project)"
                    >
                        <div class="card">
                            <div class="card-text">
                                <span>{{ project.title }}</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <ProjectModal
                    v-if="isModalOpen && selectedProject"
                    :project="selectedProject"
                    :isOpen="isModalOpen"
                    @update:isOpen="handleModalClose"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import ProjectModal from "./modal.vue";

interface Project {
    id: number;
    title: string;
    name: string;
    description: string;
    image: string;
    siteLink?: string;
    githubLink?: string;
    githubLinkAPI?: string;
}

const emit = defineEmits(["showModal"]);

const modules = [EffectCards];
const projects = ref<Project[]>([
    {
        id: 1,
        title: "Hype - Landing page",
        name: "Hype landing page",
        description:
            "Landing page para meu sistema de agendamento de horários para o ramo de estética, este projeto foi feito em next 14 e usa Stripe para pagamento das assinaturas dos planos, a pagina disponibiliza alguma informações sobre o sistema e as necessidades que ele cobre e como ele pode facilitar e agilizar a rotina dos donos de salões de beleza, barbearias, clinicas de estética e etc..., além de informações de contato com suporte da empresa e planos para poder assinar e ter acesso ao sistema.",
        image: "/imgs/hypeLanding2.png",
        siteLink: "https://www.hypeagendamento.com",
    },
    {
        id: 2,
        title: "Hype - Sistema de agendamentos",
        name: "Administrativo hype agendamentos",
        description:
            "Este é um projeto para gerenciar agendamentos e a parte administrativa de estabelecimentos do ramo de estética. O projeto foi desenvolvido em React e está rodando na AWS Amplify. Nele, os usuários podem realizar o cadastro de profissionais e clientes, fazer a gestão da agenda de horários, cadastrar serviços e gerenciar o fluxo de caixa.",
        image: "/imgs/hypeLayout.png",
        siteLink: "https://admin.hypeagendamento.com",
    },
    {
        id: 3,
        title: "Hype - Marketplace ",
        name: "Marketplace hype agendamentos",
        description:
            "Este é o marketplace que desenvolvi em Nuxt 3 para que os clientes possam fazer agendamentos com os salões da sua região. O sistema utiliza a API do Google Maps para buscar as informações de endereço e filtrar os estabelecimentos próximos à localização do usuário, além de permitir que os usuários realizem o pagamento online dos agendamentos utilizando o Stripe.",
        image: "/imgs/b2c.png",
        siteLink: "https://app.hypeagendamento.com",
    },
    // {
    //     id: 3,
    //     title: "Venda de ingressos",
    //     name: "Moderna pass",
    //     description:
    //         "Um projeto no qual participei contratado por como freelancer onde fiz algumas implementações e refatorações, como implementação de envio de email de boas vindas, redefinição de senha, disparo de emails para lembrete próximo ao dia de inicio do evento com cron e aws sqs, refatoração para migrar do mailchimp para aws ses, refatoração na infraestrutura do banco para implementar logica de lote de casadinha de ingressos e a visualização da área de tickets do usuário.",
    //     image: "/imgs/modernaPass.png",
    //     siteLink: "https://modernapass.com.br/",
    // },
    {
        id: 4,
        title: "Conversor de texto",
        name: "Text Alchemy",
        description:
            "Projeto pessoal de um site de utilidades para formatação de texto e outras funcionalidades, o projeto foi feito com Vue 3 e testado com cypress e vitest que são sempre rodados a cada deploy automaticamente no github actions.",
        image: "/imgs/textAlchemy.png",
        siteLink: "https://vue-text-convert.vercel.app/",
        githubLink: "https://github.com/Guilherme-px/vue-text-convert",
    },
    {
        id: 5,
        title: "Pagina para cafeteria",
        name: "Cafeteria",
        description:
            "Um projeto pessoal que na época fiz para praticar meus conhecimentos em vuejs 2, é uma simples landing page para divulgar uma cafeteria e seus produtos.",
        image: "/imgs/coffeePage2.png",
        siteLink: "https://guilherme-px.github.io/coffee-page/",
        githubLink: "https://github.com/Guilherme-px/Landing-page-vue-vuetify",
    },
    {
        id: 6,
        title: "Pagina para hamburgueria",
        name: "Burguer page",
        description:
            "Um projeto pessoal que na época fiz para praticar meus conhecimentos em vuejs 3, é uma simples landing page para divulgar uma hamburgueria com informações sobre a localização e produtos com preços",
        image: "/imgs/burguerMenu.png",
        siteLink: "https://guilherme-px.github.io/burg/",
        githubLink: "https://github.com/Guilherme-px/burguer-page",
    },
]);

const selectedProject = ref<Project | null>(null);
const isModalOpen = ref(false);

const openModal = (project: Project) => {
    selectedProject.value = project;
    isModalOpen.value = true;
    emit("showModal", true);
};

const handleModalClose = (value: boolean) => {
    isModalOpen.value = value;
    emit("showModal", false);
};
</script>

<style scoped>
.projects-page {
    color: #ffffff;
    padding: 20px;
    min-height: 100vh;
    height: 100%;
    font-family: Arial, sans-serif;
    background: rgba(1, 1, 1, 0.6);
}

.projects-title {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.projects-title_border {
    border: solid #ff0000 4px;
    border-radius: 25px;
    display: inline-block;
    box-shadow: 0 0 15px 5px rgba(139, 0, 0, 0.8);
}

h4 {
    color: #fff;
    text-align: center;
    padding: 8px 20px;
}

.content {
    margin-top: 70px;
}

.swiper {
    width: 463px;
    height: 306px;
}

.swiper-slide {
    box-shadow: 0 0 10px 5px rgba(139, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
}

.swiper-slide::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 18px;
}

.swiper-slide:nth-child(1n) {
    background-image: url("/imgs/hypeLanding.png");
}

.swiper-slide:nth-child(2n) {
    background-image: url("/imgs/hypeDashboard.png");
}

.swiper-slide:nth-child(3n) {
    background-image: url("/imgs/b2c-home.png");
}

.swiper-slide:nth-child(4n) {
    background-image: url("/imgs/textAlchemy.png");
}

.swiper-slide:nth-child(5n) {
    background-image: url("/imgs/coffeePage.png");
}

.swiper-slide:nth-child(6n) {
    background-image: url("/imgs/burguerPage.png");
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    width: 100%;
    height: 100%;
}

.card-text {
    display: flex;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    z-index: 1;
}

@media (max-width: 768px) {
    .content {
        max-width: 100%;
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;
    }

    .swiper {
        width: 100%;
        max-width: 386px;
        height: 564px;
        padding: 0 20px;
    }

    .swiper-slide {
        width: calc(100% - 40px);
        background-position: unset;
    }

    .swiper-slide:nth-child(1n) {
        background-image: url("/imgs/hype-landing-mobile.png");
    }

    .swiper-slide:nth-child(2n) {
        background-image: url("/imgs/hype-mobile.png");
    }

    .swiper-slide:nth-child(3n) {
        background-image: url("/imgs/moderna-mobile.png");
    }

    .swiper-slide:nth-child(4n) {
        background-image: url("/imgs/convert-mobile.png");
    }

    .swiper-slide:nth-child(5n) {
        background-image: url("/imgs/coffee-mobile.png");
    }

    .swiper-slide:nth-child(6n) {
        background-image: url("/imgs/burguer-mobile.jpg");
    }
}
</style>
