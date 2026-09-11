
let cabecas = parseFloat(prompt("Quantas cabeças de gado você tem?"));
let herdeiros = parseFloat(prompt("Quantos herdeiros você irá dividir?"));
let caridade = 85/100 * cabecas;
let cabecaHerdeiro = cabecas -  caridade;
let totalHerdeiro = Math.floor(cabecaHerdeiro / herdeiros);
let sobra= totalHerdeiro % herdeiros;
alert 