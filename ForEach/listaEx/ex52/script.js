/*Exercício 52 — Soma e média de preços
Considere os preços dos produtos:
let precos = [29.90, 45.50, 119.90, 79.90, 25.00];
Utilize forEach() para calcular a soma dos preços e, depois, a média. Mostre os dois resultados com duas
casas decimais.*/

let precos = [29.90, 45.50, 119.90, 79.90, 25.00];
let media = 0;
precos.forEach((preco ) =>{
    media += preco;
});

console.log(media.toFixed(2));
media /= precos.length;
console.log(media.toFixed(2));