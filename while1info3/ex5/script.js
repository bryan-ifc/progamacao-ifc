/* 27) Faça um programa em Javascript que leia 3 valores inteiros (a, b, c), mais a escolha para
ordená-los (C para crescente ou D decrescente). O programa em Javascript deverá apresentar os
valores lidos da seguinte forma:
➔ se C, escrever os três valores A, B e C em ordem crescente;
➔ se D, escrever os três valores A, B e C em ordem decrescente.
Controles de entrada com mensagem de erro:
● A, B, C: devem ser positivos.
● escolha deve ser a letra C ou D */

let A;
let B;
let C;
let cd;

cd = prompt("Digite C para crescente e D para decrescente").toLowerCase();

A = parseFloat(prompt("Informe um número para A"));
B = parseFloat(prompt("Informe um número para B"));
C = parseFloat(prompt("Informe um número para C"));