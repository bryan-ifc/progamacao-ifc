let num = parseInt(prompt(""));
let mensagem;

switch (num) {
  case 1:
    mensagem = "Janeiro";
    break;
  case 2:
        mensagem = "Fevereiro";
    break;
  case 3:
        mensagem = "Março";
    break;
  case 4:
        mensagem = "Abril";
    break;
  case 5:
        mensagem = "Maio";
    break;
  case 6:
        mensagem = "Junho";
    break;
  case 7:
        mensagem = "Julho";
    break;
  case 8:
        mensagem = "agosto";
    break;
  case 9:
        mensagem = "setembro";
    break;
  case 10:
        mensagem = "outubro";
    break;
  case 11:
        mensagem = "novembro";
    break;
  case 12:
        mensagem = "Dezembro";
    break;

  default:
    mensagem = "Informe um número entre 1 e 12";
    break;
}
alert (mensagem)