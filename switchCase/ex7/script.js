let figura = parseInt(prompt("informe a figura"));
let altura;
let lado;
let base;
let raio;
let area;
let mensagem;

switch (figura) {
  case 1:
    lado = parseFloat(prompt("diga o lado do quadrado"));
    area = Math.pow(lado, 2);
    break;
  case 2:
    altura = parseFloat(prompt("Diga a altura do retangulo"));
    base = parseFloat(prompt("diga a base do retangulo"));
    area = (base * altura);
    break;
  case 3:
    raio = parseFloat(prompt("diga o raio do circulo"));
    area =  Math.PI * Math.pow(raio, 2);
    break;
  default:
    mensagem = "Diga uma figura geométrica disponível";
    alert(mensagem);
    break;
}
alert("A área da sua figura é de " + area.toFixed(2) + " metros");