let num = parseInt(prompt(""));
let mensagem;

switch (num) {
  case 1:
    mensagem = "Domingo";
    break;

  case 2:
    mensagem = "segunda";
    break;

  case 3:
    mensagem = "terça";
    break;

  case 4:
    mensagem = "quarta";
    break;

  case 5:
    mensagem = "Quinta";
    break;

  case 6:
    mensagem = "Sexta";
    break;

  case 7:
    mensagem = "Sábado";
    break;
    
  default:
    mensagem = "Informe um número válido";
    break;

}
    alert(mensagem);
