let peso = parseFloat(prompt("Qual o seu peso?"))
let porcentagem1 = 15/100;
let porcentagem2 = 20/100;
let pesoMaior = peso * porcentagem1
let pesoMenor = peso *porcentagem2
let pesototal1 = peso + pesoMaior
let pesototal2 = peso -pesoMenor
alert (`Se você engordar 15% ficará com` +pesototal1.toFixed(2) + `kg\n` +
`Se você emagrecer 20% ficará com` +pesototal2.toFixed(2) + `kg`);