let codigoProduto = parseInt(prompt("Informe o código do produto"));
let quantidadeProduto = parseFloat(prompt("Informe a quantidade de produto que você comprou"));
let precoFinal;
let descricaoProduto
if (codigoProduto === 1) {
    precoFinal = quantidadeProduto * 125.48;
    descricaoProduto = "Informática para Concursos";
} else if (codigoProduto === 2) {
    precoFinal = quantidadeProduto * 108.36;
    descricaoProduto = "Java como programar";
} else if (codigoProduto === 3) {
    precoFinal = quantidadeProduto * 99.99;
    descricaoProduto = "Lógica de Progamação";
} else if (codigoProduto === 4) {
    precoFinal = quantidadeProduto * 215.67;
    descricaoProduto = "Fundamentos da Progamação";
} else {
    alert ("Código inválido");
} 
alert ("O preço final do produto é de R$" +precoFinal.toFixed(2));
alert ("A descição do seu produto é: " +descricaoProduto);