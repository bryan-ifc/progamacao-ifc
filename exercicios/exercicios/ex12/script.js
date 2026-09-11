let medida1 = parseFloat(prompt("Informe a medida 1"));
let medida2 = parseFloat(prompt("Informe a medida 2"));
let medida3 = parseFloat(prompt("Informe a medida 3"));
let triangulo;

if ((medida1 + medida2 > medida3)  && (medida1 + medida3> medida2) && (medida2 + medida3 > medida1)) {
    triangulo = "Forma triângulo";
} else {
    triangulo = "Não forma triângulo";
}

alert(triangulo);