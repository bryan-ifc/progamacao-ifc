let horasUtilizadas = parseInt(prompt("quantas horas foi utilizadas"));
let valorHora = parseFloat(prompt("qual o preço da hora"));
let precoTotal = horasUtilizadas * valorHora;
let desconto;

if (horasUtilizadas <=100) {
    desconto = 0;
} else if (horasUtilizadas <=250) {
    desconto = precoTotal * 0.08;
} else {
    desconto = precoTotal * 0.15;
}

let valorTotal = precoTotal - desconto;

alert ("O valor bruto foi de R$" +precoTotal.toFixed(2) +"\n o valor do desconto foi de R$ " +desconto.toFixed(2) +"\n o valor final foi de R$" +valorTotal)