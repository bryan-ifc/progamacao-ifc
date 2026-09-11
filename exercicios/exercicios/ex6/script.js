let saldo = parseFloat(prompt("Qual seu saldo no banco em reais"));
let credito;
let valorCredito;

if (saldo <=500) {
    credito = saldo;
    valorCredito = 0;
} else if (saldo >500 && saldo <= 1000) {
    credito = saldo * 1.3;
    valorCredito = 30/100 * saldo;
} else {
    credito = saldo * 1.5;
    valorCredito = 50/100 * saldo;
}

alert ("seu saldo é de R$" +credito.toFixed(2));
alert ("o valor do crédito foi de R$" +valorCredito.toFixed(2));