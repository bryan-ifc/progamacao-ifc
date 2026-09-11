let tipoCombustivel = prompt("Informe o tipo de combustivel você vai usar").toUpperCase();
let capacidadeTanque = parseFloat( prompt("Informe a capacidade do tanque do seu carro"));
let gasto;
if (tipoCombustivel == "G") {
    gasto = capacidadeTanque * 5.65;
} else if (tipoCombustivel =="E") {
    gasto = capacidadeTanque * 4.38;
} else {
    alert ("Não encontrado");
}
alert ("Seu gasto foi de R$" +gasto.toFixed(2));

