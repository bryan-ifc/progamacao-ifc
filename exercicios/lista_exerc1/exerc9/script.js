let precoProduto = parseFloat(prompt("Quanto é o valor original do produto?"));
let desconto = 5/100;
let valorDesconto = precoProduto * desconto;
let valorPago = precoProduto - valorDesconto;
alert ("O valor que você irá pagar é de R$" +valorPago.toFixed(2));