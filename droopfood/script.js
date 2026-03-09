function coletarDados(){

let nome = prompt("Digite seu nome:");
let regiao = prompt("Digite sua região:");

alert("Dados enviados!");

document.getElementById("resultado").innerHTML =
"Óla, seja bem vindo " + nome + " confira os nossos serviços abaixo";

}