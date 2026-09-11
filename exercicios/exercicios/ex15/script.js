let nota1 = parseFloat(prompt("Informe a nota 1 do aluno"));
let nota2 = parseFloat(prompt("Informe a nota 2 do aluno"));
let media = (nota1 + nota2)/2
let situacao;

if (media >= 7) {
    situacao = "aprovado";
} else if (media>=5) {
    situacao = "recuperação";
} else {
    situacao = "reprovado";
}
alert("Sua situação foi " +situacao);
alert ( "Sua média foi " +media.toFixed(2));











