let salario = parseFloat(prompt("Informe seu salário em R$"));
let imposto;

if (salario <= 2500) {
    imposto = 0;
} else if (salario >2500 && salario <= 5000) {
    imposto = 15/100 * salario;
} else {
    imposto = 27/100 * salario;
}

alert ("O valor do seu imposto é de R$" +imposto.toFixed(2));