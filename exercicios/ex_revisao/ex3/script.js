let tarefas = parseInt(prompt(""));
let bugs = parseInt(prompt(""));
let avaliacaoTecnica = parseFloat(prompt(""));
let indice = (tarefas *2) + (avaliacaoTecnica*10) - (bugs *5);
let mensagem;

if (indice <50) {
    mensagem = "Desempenho insatisfatório";
} else if (indice <=99) {
    mensagem = "Desempenho bom";
} else {
    mensagem = "Desempenho excelente";
}

alert (mensagem);