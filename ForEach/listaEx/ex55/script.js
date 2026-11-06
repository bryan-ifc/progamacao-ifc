/* Exercício 55 — Valores pares, ímpares e suas quantidades
Considere o array:
let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
Percorra o array com forEach(). Exiba os números pares e os ímpares em grupos separados e conte
quantos números há em cada grupo. Utilize o operador módulo (%) para identificar a paridade. */

let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let contPar = 0;
let contImpar = 0;

numeros.forEach((num)=> {
    if (num %2 == 0) {
        console.log(num);
        contPar = contPar +1;
    } else {
        console.log(num);
        contImpar = contImpar + 1;
    }
})

console.log(contPar);
console.log(contImpar);

// não acabei

