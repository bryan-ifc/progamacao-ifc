let notaAluno = parseFloat(prompt("Informe a nota do aluno"));
let fequenciaAluno = parseFloat(prompt("Informe a frequência do aluno"));
let media = 6
let frequenciaMedia = 75
let estado;

if (notaAluno >= media && fequenciaAluno >= 75) {
    estado = "Você foi aprovado";
} else {
    estado = "Você foi reprovado";
}
alert (estado)