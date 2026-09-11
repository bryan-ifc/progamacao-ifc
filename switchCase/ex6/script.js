let codigo = parseInt(prompt(""));
let preco;
let produto;
let mensagem;

switch (codigo) {
  case 100:
    preco = 50;
    produto = "Mouse";
    break;
  case 200:
    preco = 80;
    produto = "Teclado";
    break;
    case 300:
      preco = 900;
      produto = "monitor";
  default:
    mensagem = "Código de produto inválido";
    alert (mensagem);
    break;
}
alert ("O produto é o" +produto + "e o preco é R$" +preco.toFixed(2));
