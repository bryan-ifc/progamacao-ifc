let numeroEntrega = parseInt(prompt("Informe quantas entregas você fez no total"));
let tempoEntrega = parseFloat(prompt("Informe quanto tempo você demora por entrega em minutos (média)"));
let consumoEntrega = parseFloat(prompt("Informe quantos litros de combustível você consume porentrega (média)"));
let precoCombustivel = parseFloat(prompt("Informe qual é o preço do combustivel"));

let totalTempo = (numeroEntrega * tempoEntrega) /60;
let consumoTotal = consumoEntrega * precoCombustivel;
let custoTotal 
