let precoOriginal = parseFloat (prompt ("Informe o preço original do produto"));
let precoPago = parseFloat(prompt("Informe o preço que você pagou pelo produto"));
let desconto = precoOriginal - precoPago
let porcentagem = (desconto / precoOriginal) * 100
alert("O desconto do produto foi de " +porcentagem.toFixed(2) + "%");