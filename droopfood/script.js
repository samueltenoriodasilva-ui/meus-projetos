function coletarDados(){

let nome = prompt("Digite seu nome:");
let regiao = prompt("Digite sua região:");

alert("Dados enviados!");

document.getElementById("resultado").innerHTML =
"Nome: " + nome + "<br>Região: " + regiao;

}