const imagens = [
    "fotos/agro.webp",
    "fotos/agropecuaria-brasileira.jpg",
    "fotos/labora.jpg",
    "fotos/lanoratoriaoagro.jpg",
    "fotos/tec-agro.jpg"
];

let atual = 0;
const hero = document.querySelector(".hero");

setInterval(() => {
    atual = (atual + 1) % imagens.length;

    hero.style.backgroundImage =
        `linear-gradient(rgba(0, 0, 0, 0.46), rgba(1, 2, 1, 0.57)), url('${imagens[atual]}')`;
}, 5000);