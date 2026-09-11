let espacoContratado = parseFloat(prompt(""));
let espacoUtilizado = parseFloat(prompt(""));
let mensagem;

if (espacoUtilizado <= espacoContratado * 0.5) {
    mensagem = "Uso normal";
} else if (espacoUtilizado <= espacoContratado * 0.8) {
    mensagem = "Atenção: armazenamento se aproximando do limite";
} else {
    mensagem = "Espaço crítico. Considere ampliar o plano";
}

alert (mensagem);