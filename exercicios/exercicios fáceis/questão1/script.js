let nota = parseFloat(prompt("Informe a nota do aluno"));
let nota2 = parseFloat(prompt("Informe a nota 2 do aluno"));
let mediaNota = (nota + nota2) / 2
let situacao;

if (mediaNota >= 7) {
    situacao = "Aprovado";    
} else {
    situacao = "Reprovado";
}

alert ("sua situação é " +situacao);