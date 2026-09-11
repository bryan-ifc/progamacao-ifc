let codigo = parseInt(prompt(""));
let curso;
let mensagem;

switch (codigo) {
  case 1:
    curso = "Informática";
    break;
    case 2:
      curso = "Administração"
      break;
      case 3:
        curso = "Redes de Computadores";
        break;
  default:
    mensagem = "Código de curso inválido.";
    alert (mensagem);
    break;
}

alert ("Seu curso é " +curso)