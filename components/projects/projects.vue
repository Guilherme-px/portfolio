<template>
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
                <swiper-slide>
                    <div class="card">
                        <div class="card-text">
                            <span>Titulo</span>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Totam maxime eveniet nam magni
                                tempora sed voluptate quam blanditiis officiis
                                consectetur, sapiente, perspiciatis corrupti
                                soluta maiores quos, sunt id ipsum ullam.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card">
                        <div class="card-text">
                            <span>Titulo</span>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Totam maxime eveniet nam magni
                                tempora sed voluptate quam blanditiis officiis
                                consectetur, sapiente, perspiciatis corrupti
                                soluta maiores quos, sunt id ipsum ullam.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card">
                        <div class="card-text">
                            <span>Titulo</span>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Totam maxime eveniet nam magni
                                tempora sed voluptate quam blanditiis officiis
                                consectetur, sapiente, perspiciatis corrupti
                                soluta maiores quos, sunt id ipsum ullam.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
};
</script>

<style scoped>
.projects-page {
    background-color: #111111;
    color: #ffffff;
    padding: 20px;
    min-height: 100vh;
    height: 100%;
    font-family: Arial, sans-serif;
}

.projects-title {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.projects-title_border {
    border: solid #8b0000 4px;
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
    width: 340px;
    height: 460px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    color: #fff;
}

.swiper-slide:nth-child(1n) {
    background-image: url("/imgs/Layout.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.swiper-slide:nth-child(2n) {
    background-image: url("/imgs/Layout.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.swiper-slide:nth-child(3n) {
    background-image: url("/imgs/Layout.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    width: 340px;
    height: 460px;
}

.card-text {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    width: 340px;
    height: 460px;
    padding: 20px;
}

.card-text span {
    margin-block: 20px;
}

.card-text p {
    font-size: 15px;
}

@media (max-width: 768px) {
    .content {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;
    }
}
</style>
