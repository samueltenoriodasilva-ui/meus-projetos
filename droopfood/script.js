"use strict";

const imagens = [
    "foto/drone.png"
];

let index = 0;

function trocarImagens() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    document.querySelector(".cabecario").style.backgroundImage =
        `url(${imagens[index]})`;
}

document.querySelector(".cabecario").style.backgroundImage =
    `url(${imagens[0]})`;

setInterval(trocarImagens, 3000);