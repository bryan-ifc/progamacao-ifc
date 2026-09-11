let quantidadeDinheiro = parseFloat(prompt("Informe a quantidade de dinheiro quetem no caixa"));
let quantidadeProduto = parseInt(prompt("Informe a quantidade de produtos a ser comprada"));
let precoUnidade = parseFloat(prompt("Informe o preço de cada produto"));
let precoTotal = quantidadeProduto * precoUnidade;
let formaPagamento;
let valorserPago;
let desconto;
if (precoTotal > quantidadeDinheiro * 0.8) {
    valorserPago = (precoTotal * 1.1 ) / 3;
    formaPagamento = "A prazo";
} else {
    desconto =  precoTotal - (precoTotal * 0.05)
    valorserPago = precoTotal - desconto;
    formaPagamento = "A vista";
}

alert ("sua forma de pagamento foi de " +formaPagamento);
alert ("Você precisa pagar " +valorserPago.toFixed(2));