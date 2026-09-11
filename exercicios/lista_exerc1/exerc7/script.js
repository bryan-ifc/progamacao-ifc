let nota1 = parseFloat(prompt("insira a nota 1"));
let nota2 = parseFloat(prompt("insira a nota 2"));
let nota3 = parseFloat(prompt("insira a nota 3"));
let peso1 = 2
let peso2 = 3
let peso3 = 5
let resultado1 = nota1 * peso1;
let resultado2 = nota2 * peso2;
let resultado3 = nota3 * peso3;
let media = (resultado1 + resultado2 + resultado3) / (peso1 + peso2 + peso3);
alert("A média das notas foi" +media.toFixed(2));''