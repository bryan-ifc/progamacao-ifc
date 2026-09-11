let areaTotal = parseFloat(prompt("Área total a ser pintada (em metros quadrados"));
let rendimentoTinta = parseFloat(prompt("Rendimento da tinta (em metros quadrados por litro)."));
let volumetriaLata = parseFloat(prompt("Volumetria da lata de tinta (em litros)."));
let precoLata = parseFloat(prompt("Preço unitário da lata de tinta."));
let horaEstimada = parseFloat(prompt("Quantidade de horas estimadas para a execução do serviço."));
let quantidadePintor = parseInt(prompt("Quantidade de pintores alocados na equipe."));
let valorHora = parseFloat(prompt("Valor da hora cobrado por pintor."));
let valorReservado = parseFloat(prompt("Valor reservado (orçamento máximo disponível pela família)."));

let litragemNecessaria = (areaTotal / rendimentoTinta);
let quantidadeLata = Math.ceil(litragemNecessaria / volumetriaLata);
let custoMaterial =  quantidadeLata * precoLata;

let custoEquipe = (horaEstimada * quantidadePintor) * valorHora;

let custoTotal = (custoMaterial + custoEquipe);

let desconto;
let valorFinal;
let sobra;
let parcela;
let pagamento;

if (valorReservado >= custoTotal) {
    desconto = (5/100 * custoTotal);
    valorFinal = custoTotal - desconto;
    sobra =  valorReservado - valorFinal;
    pagamento = "A vista e com desconto de 5%"
} else if ( custoTotal >= valorReservado*1.5) {
    parcela = custoTotal / 4;
    valorFinal = custoTotal;
} else if (custoTotal >= valorReservado*1.3) {
    parcela =  custoTotal/ 3;
    valorFinal = custoTotal;
} else {
    parcela = custoTotal / 2;
    valorFinal = custoTotal;
}

alert ("Você teve " +quantidadeLata +"latas usadas \n" + "você teve um custo de R$" +custoMaterial.toFixed(2) + "no material \n" + `O custo da mão de obra foi de R$  ${custoEquipe.toFixed(2)}\n` + `O custo total bruto foi de R$ ${custoTotal.toFixed(2)}` )