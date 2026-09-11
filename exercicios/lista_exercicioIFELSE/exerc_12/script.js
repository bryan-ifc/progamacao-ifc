let precoProuto = parseFloat(prompt("Informe o preço do produto"));
let codigoOrigem = parseInt(prompt("Informe o código do produto"));
let procedencia;

if (codigoOrigem === 1) {
    procedencia = "Sul";
} else if (codigoOrigem === 2) {
    procedencia = "Sudeste";
} else if (codigoOrigem === 3) {
    procedencia = "Centro-Oeste";
} else if (codigoOrigem === 4) {
    procedencia = "Norte";
} else if (codigoOrigem === 5) {
    procedencia = "Nordeste";
} else {
    procedencia = "Código inválido";
}

alert ("O preço do produto foi de R$" +precoProuto.toFixed(2));
alert ("A Procedencia foi para" +procedencia);