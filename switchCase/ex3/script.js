let codigo = prompt("").toUpperCase();
let mensagem;

switch (codigo) {
  case "M":
    mensagem = "Bom dia meu guri lindo hahahahaha ";
    break;
  case "T":
    mensagem = "Opa boa tarde meu bem hahahaha te amo";
    break;
  case "N":
    mensagem = "deixa eu dorimir seu infeliz!!!!!!!!!";
    break;
  default:
    mensagem = "Informe M, N ou T";
    break;
}

alert(mensagem);
