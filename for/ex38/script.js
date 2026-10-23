/* Exercício 38 — Maior e Menor Peso de Lotes
Uma unidade de processamento agrícola em São Joaquim registra o peso de seis lotes de produtos
em quilogramas.
● Mecânica Principal (for): Solicite o peso de seis lotes, um por repetição.
● Maior e menor: Identifique o maior e o menor peso informado.
● Saída: Ao final, apresente os dois valores encontrados.
● Restrição: Utilize variáveis de controle para armazenar os extremos durante o processamento,
sem precisar guardar todos os pesos em um vetor. */
let maior = 0;
let menor = 0;
let seila = parseInt(prompt("sla"))
for(let lote = 1; lote <=seila; lote++) {
        let peso = +prompt("Informe o peso do lote");
        if (lote == 1 ) {
                maior = peso;
                menor = peso;
        } if( peso > maior) {
                maior = peso;
        }
        if (peso <menor) {
                menor = peso;
        }
        
}

alert ( "O maior peso foi " +maior);
alert ("O menor peso foi " +menor);