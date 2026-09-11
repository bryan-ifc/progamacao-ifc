let horas = parseInt(prompt("Número de horas previstas"));
let valorHora = parseFloat(prompt("valor da hora"));
let complexidade = parseInt(prompt("porcentagem complexidade (10, 20 ou 30)"));
let custoBase = horas * valorHora;
let acrescimo = custoBase * (complexidade/100);
let valorFinal = custoBase + acrescimo;
let mensagem;

if (valorFinal <=8000) {
    mensagem = "Projeto Pequeno";
} else if (valorFinal<=20000) {
    mensagem = "Projeto médio";
} else {
    mensagem = "projeto grande"
}

alert (mensagem)