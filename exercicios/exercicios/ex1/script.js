let number1 = parseFloat(prompt("informe um número  "));
let number2 = parseFloat(prompt("Informe o segundo número"));
let operacao = prompt("informe uma operação (positivo, negativo, multiplicação ou divisão");
let conta;
if (operacao == "+") {
    conta = number1 + number2;
} else if (operacao == "-") {
    conta = number1 - number2;
} else if (operacao == "*") {
    conta = number1 * number2;
} else if (operacao == "/") {
    conta = number1 / number2;
} else {
    alert ("Nenhuma das operações  ditas anteriormente foi selecionada");
}
alert ("O resultado da sua conta é de " +conta.toFixed(5));
