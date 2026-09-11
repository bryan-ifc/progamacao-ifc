let cofre = parseFloat(prompt("Quantos dolares tem no seu cofre?"));
let dolar = parseFloat (prompt("quanto esta valendo o dolar atualmente?"));
let valorReal = cofre * dolar;
alert ("o valor em reais que tem no seu cofre é de R$" +valorReal.toFixed(2));