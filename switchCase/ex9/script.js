let codigo = prompt("").toLowerCase();
let mensagem;
let meioTransporte;

switch (codigo) {
  case "c":
    meioTransporte = "Carro";
    break;
    case "m":
      meioTransporte = "Moto";
      break;
      case "b":
        meioTransporte = "Bicicleta";
        break;
  default:
    mensagem = "Código de transporte inválido.";
    alert ( mensagem);
    break;
}

alert ("O meio de transporte é o " +meioTransporte);