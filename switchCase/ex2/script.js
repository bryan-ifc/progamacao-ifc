let num = parseFloat(prompt(""));
let num2 = parseFloat(prompt(""));
let operacao = prompt("");
let conta;

switch (operacao) {
  case "+":
    conta = num + num2;
    break;
 case "-":
  conta = num - num2;
  break;
case "*":
conta = num * num2;
break;
case "/":
  conta = num / 2;
  default:
    alert ("Informe o operador correto");
    break;
}
alert (conta);