/* Exercício 53 — Maior e menor temperatura
Considere as temperaturas registradas durante a semana:
let temperaturas = [18, 22, 16, 25, 19, 27, 21];
Utilize forEach() para encontrar a maior e a menor temperatura. Ao final, exiba ambos os valores.
Considere que o array não está necessariamente ordenado. */

let temperaturas = [18, 22, 16, 25, 19, 27, 21];
let maior = temperaturas[0];
let menor = temperaturas[0];
temperaturas.forEach((temp) => {
    if (maior < temp) {
        maior = temp;
    }
 if (temp < menor) {
        menor = temp; 
    }});
console.log(maior);
console.log(menor);