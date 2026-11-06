/* Exercício 54 — Contagem e listagem de aprovados
Considere as notas de oito estudantes:
let notas = [6, 8, 5, 9, 7, 4, 10, 6];
Utilize forEach() para contar quantas notas são maiores ou iguais a 7 e exibir cada nota que atende a essa
condição. Ao final, mostre a quantidade de notas aprovadas*/

let notas = [6, 8, 5, 9, 7, 4, 10, 6];
let cont = 0;

notas.forEach((nota) =>{
    if (nota >=7) {
        console.log(nota);
    }
    if (nota >=7) {
        cont = cont +1;
    }
});

console.log(cont);