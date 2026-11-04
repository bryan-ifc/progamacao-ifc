// 6. Crie um array com cinco notas. Calcule e exiba a soma das notas.

let notas = [1,2,7,0,4];
let soma = 0;
notas.forEach((nota) => {
    soma = soma + nota;
});

console.log(soma);