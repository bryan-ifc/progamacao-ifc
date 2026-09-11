/* 26) Faça um programa em Javascript que receba o valor do salário de uma pessoa e o valor de um
financiamento pretendido. Caso o financiamento seja menor ou igual a 5 vezes o salário da pessoa,
o programa em Javascript deverá escrever “Financiamento Concedido"; senão, ele deverá
escrever"Financiamento Negado". Independente de conceder ou não o financiamento, o programa
em Javascript escreverá depois a frase "Obrigado por nos consultar.".
No final deverá ser apresentado a mensagem relacionada ao resultado da análise do
financiamento.
Controles de entrada com mensagem de erro:
● salário: deverá ser positivo e menor ou igual a R$ 20 mil.
● financiamento: deverá ser positivo e menor ou igual a R$ 1 milhão. */


// ENTRADA
let salario;
let financiamento;
const mensagem = "Obrigado por nos consultar";
let continuar;

//PROCESSAMEMTO
do {
    do {
    do {
        salario = parseFloat (prompt("Informe o seu salário"));
        financiamento = parseFloat(prompt("Informe o financiamento que você quer"))
        if ((salario <= 0  || salario > 20000) || (financiamento <= 0 || financiamento >1000000) || (isNaN(salario)) || (isNaN(financiamento)))  {
            alert ("Informe um valor válido")
        }
    } while ((salario <= 0  || salario > 20000) || (financiamento <= 0 || financiamento >1000000) || (isNaN(salario)) || (isNaN(financiamento)));
    if (financiamento <= salario *5) {
        alert ("Financiamento concedido");
        alert (mensagem);
        alert ("por seu financiamento estar entre os limites de 5 vezes seu salário atual. Ele foi permitido");
    } else {
         alert ("Financiamento negado");
        alert (mensagem);
        alert ("por seu financiamento não estar entre os limites de 5 vezes seu salário atual. Ele foi negado");
    }
} while (financiamento > salario *5);
     continuar = prompt("Você deseja fazer novamente?").toLowerCase();
} while (continuar == "sim");