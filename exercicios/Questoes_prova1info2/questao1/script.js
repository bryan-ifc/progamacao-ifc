let volumeInicial = parseFloat(prompt("Informe qual o volume inicial do reservatório em litros"));
let litrosporHora = parseFloat(prompt("informe quantos litros de água enche por hora"));
let tempoDemorado = parseFloat(prompt("informe quantas horas demorou para encher"));

let volumeFinal = (litrosporHora * tempoDemorado) + volumeInicial;

alert (" o volume final do seu reservatório foi de" +volumeFinal.toFixed(2));