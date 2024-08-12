<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="social-links">
                <a
                    href="https://wa.me/44991719407"
                    target="_blank"
                    aria-label="WhatsApp"
                >
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/guilherme-augusto-da-silva/"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/Guilherme-px"
                    target="_blank"
                    aria-label="Github"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    href="mailto:guilherme.s.goncalves@outlook.com"
                    aria-label="Email"
                >
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
            <div class="divider"></div>
            <p class="copy">
                &copy; 2024 Guilherme Augusto da Silva Gonçalves. Todos os
                direitos reservados.
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 20px;
    background-color: #111111;
    color: #fff;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-links {
    margin-bottom: 10px;
}

.social-links a {
    color: #fff;
    margin: 0 15px;
    font-size: 25px;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #ff0000;
}

.divider {
    border: solid 1px;
    border-color: #ff0000;
    width: 100%;
    margin-block: 10px;
}

.copy {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 20px;
}
</style>
