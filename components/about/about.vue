<template>
    <div id="sobre" class="about-page">
        <div class="about-title">
            <div class="about-title_border">
                <h2>Sobre</h2>
            </div>
        </div>
        <div class="content">
            <div class="text-section">
                <p>
                    Me formei em 2020 em Análise e Desenvolvimento de Sistemas
                    pela Unipar. Desde então, venho trabalhando como full stack
                    e me especializando principalmente na stack de JavaScript.
                    Hoje, trabalho prestando serviços sob demanda como
                    freelancer e desenvolvendo um sistema próprio que está sendo
                    desenvolvido desde o fim de 2023 para gestão de
                    estabelecimentos de estética. Esse sistema é composto por um
                    SaaS para gestão financeira e agenda dos estabelecimentos,
                    além de um marketplace para agendamento online.
                </p>
            </div>
            <div class="image-section">
                <div class="image-container">
                    <img src="~/public/imgs/me.jpg" alt="Minha Foto" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-page {
    background: rgba(1, 1, 1, 0.777);
    color: #ffffff;
    padding: 20px;
    min-height: 100vh;
    height: 100%;
    font-family: Arial, sans-serif;
}

.about-title {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.about-title_border {
    border: solid #ff0000 4px;
    border-radius: 25px;
    display: inline-block;
    box-shadow: 0 0 15px 5px rgba(139, 0, 0, 0.8);
}

h2 {
    color: #fff;
    text-align: center;
    padding: 7px 24px;
    font-size: 20px;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
}

.text-section {
    flex: 1;
    padding-right: 20px;
    min-width: 300px;
    text-align: center;
    margin-left: 80px;
}

.text-section p {
    line-height: 25px;
    font-weight: 500;
    font-size: 18px;
}

.image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 300px;
    margin-top: 20px;
}

.image-container {
    position: relative;
    width: 200px;
    height: 200px;
}

.image-container::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    background-color: #ff0000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    box-shadow: 0 0 15px 5px rgba(139, 0, 0, 0.8);
}

.image-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 2;
}

@media (max-width: 768px) {
    .content {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;
    }

    .text-section {
        padding-right: 0px;
        text-align: center;
        margin-inline: 15px;
        margin-bottom: 50px;
    }

    .image-section {
        margin-top: 20px;
    }
}
</style>
