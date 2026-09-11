let temperatura = parseFloat(prompt("Qual a temperatura atual ?"));
let mudancaTemperatura;

if (temperatura<100) {
    alert("A temperatura está muito baixa");
} else if (temperatura <=200) {
    alert("A temperatura está baixa");
} else if ( temperatura <500) {
    alert("A temperatura está normal ");
} else {
    alert("A temperatura está muito alta");
}