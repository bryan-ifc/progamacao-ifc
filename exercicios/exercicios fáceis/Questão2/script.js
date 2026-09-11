let numero = parseFloat(prompt("Informe um numero positivo ou negativo"));
let negativoPosiitivo
if (numero < 0) {
    negativoPosiitivo = "negativo";
} else if (numero === 0) {
    negativoPosiitivo = "zero(nulo)";
} else {
    negativoPosiitivo =  "positivo";
} 

alert ("Seu numero é: " +negativoPosiitivo);