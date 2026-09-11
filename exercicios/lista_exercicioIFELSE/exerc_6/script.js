let altura = parseFloat(prompt("Informe sua altura"));
let sexo = prompt("informe seu sexo");
let pesoIdealH;
let pesoIdealF;
if (sexo == "M" || "m") {
    pesoIdealH = (72.7 * altura) - 58;
    console.log("seu peso ideal é de " +pesoIdealH.toFixed(2) );
} else if (sexo == "F" || "f") {
    pesoIdealF = (62.1 * altura) - 44.7;
    console.log("seu peso ideal é de " +pesoIdealF.toFixed(2) );
} else {
    console.log("ERRO");
}