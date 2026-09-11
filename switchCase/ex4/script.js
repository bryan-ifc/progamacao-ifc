let bebidaCodigo = parseInt(prompt(""));
let mensagem;

switch (bebidaCodigo) {
  case 1:
    mensagem = "Água";
    break;
 case 2:
  mensagem = "Refrigerante";
  break;

  case 3:
    mensagem = "Suco";
    break;

  default:
    mensagem = "Código de bebida inválido"
    break;
}

alert (mensagem);