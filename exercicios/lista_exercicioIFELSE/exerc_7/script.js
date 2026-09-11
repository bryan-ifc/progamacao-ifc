let valorInicial = parseInt(prompt("Qual é o valor inicial?"));
let valorFinal = parseInt(prompt("Qual é o valor final?"));
let valorKWh = parseInt(prompt("Qual é o valor do KWh?"));
let consumoKwh = valorFinal - valorInicial;
let extra;
let fatura;
if (consumoKwh<=150) {
    fatura= valorKWh *consumoKwh;
} else {
    extra = consumoKwh - 150;
    fatura = (150 * valorKWh) + (extra*consumoKwh*1.20);
}