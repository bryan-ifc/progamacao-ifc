let conversao = parseInt(prompt(""));
let mensagem;
let resultado;
let km;
let metros;

switch (conversao) {
  case 1:
    km = parseFloat(prompt("Informe a quantidade de km"));
    resultado = km/1000;
    break;
    case 2:
      metros = parseFloat(prompt("informe a quantidade de metros"));
      resultado = metros *1000;

  default:
    mensagem = "Opção de conversão inválida.";
    alert (mensagem);
    break;
  

}

alert ("o seu resultado foi de " +resultado.toFixed(2));