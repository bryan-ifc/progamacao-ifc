let precos = [29.90, 45.50, 119.90, 79.90, 25.00];

function calcularMedia(valores) {
    let soma =0;
    valores.forEach(function(preco) {
    soma =soma + preco;
    });
    return soma/ valores.length
}

let media = calcularMedia(precos);
console.log(media.toFixed(2));