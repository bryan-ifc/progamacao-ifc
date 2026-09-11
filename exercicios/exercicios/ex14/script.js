let consumoAgua = parseFloat(prompt("Informe o consumo em m³ de água"));
let  cobranca;

if (consumoAgua <= 10){
    cobranca = 30;
} else if (consumoAgua <=25) {
    cobranca = 50
} else {
    cobranca = 80;
}

alert("A cobrança foi de R$" +cobranca.toFixed(2));