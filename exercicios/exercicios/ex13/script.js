let peso = parseFloat(prompt("Informe o peso do produto"));
let frete;

if (peso <= 5) {
    frete = 20;
} else if (peso >5 && peso <=20) {
    frete = 50;
} else {
    frete = 100;
}

alert ("Seu frete é de R$" +frete.toFixed(2));
