// 5. Para [3, 10, 6, 12, 5], exiba somente os valores maiores que 6.

let numeros = [3, 10, 6,12,5];
let soma = 0;
numeros.forEach((num) =>{
    if(num >6) {
soma = soma + num;
    }
});
console.log(soma)