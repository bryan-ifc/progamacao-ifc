/* Exercício 36 — Consumo de Energia de uma Câmara Fria
Uma cooperativa de pescados de Itajaí monitora o consumo de energia elétrica de uma câmara fria
durante cinco dias consecutivos.
● Mecânica Principal (for): Execute exatamente cinco repetições para registrar o consumo diário
em kWh.
● Entrada: Solicite o consumo de cada dia ao usuário.
● Acumulador: Some os cinco valores informados.
● Estatística: Calcule a média diária de consumo.
● Saída: Apresente o consumo total e a média diária registrada.
Restrição: Utilize o comando for para controlar a quantidade de dias processados. */

let total = 0;

for (let dia = 1; dia <=5; dia++) {
        let consumo = parseInt(prompt("Consumo do dia  em Kwh"));
        total = total + consumo;
}
let media = total /5;
console.log("Total:" total " Kwh");
console.log ("Média diária: " media "Kwh");