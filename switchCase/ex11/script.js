let categoria = prompt("Informe a categoria").toUpperCase();
let energiaConsumida = parseFloat(prompt("Informe a quantidade de energia utilizada"));
let mensagem;
let resultado;

switch (categoria) {
  case "R":
    resultado = energiaConsumida * 0.75;
    break;
  case "C":
    resultado = energiaConsumida * 0.92;
    break;
  case "I":
    resultado = energiaConsumida * 0.68;
    break;
  default:
    mensagem = "Categoria de consumidor inválida.";
    alert (mensagem);
    break;
}
alert ("O total a ser pago é de R$" +resultado.toFixed(2));