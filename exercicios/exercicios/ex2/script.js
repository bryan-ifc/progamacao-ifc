let lado1 = parseFloat(prompt("Informe o lado 1 do triângulo"));
let lado2 = parseFloat(prompt("Informe o lado 2 do triângulo"));
let lado3 = parseFloat(prompt("Informe o lado 3 do triãngulo"));
let triangulo;

if (lado1 == lado2 && lado1 == lado3) {
    triangulo = ("Seu triângulo é equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    triangulo = ("Seu triângulo é isósceles");
} else {
    triangulo = ("Triângulo Escaleno");
}

alert (triangulo);
