/* Exercício 51 — Exibição de produtos e índices
Uma loja possui o array abaixo:
let produtos = ["teclado", "mouse", "monitor", "webcam", "fone"];
Utilize forEach() para exibir no console o nome de cada produto e sua posição no array. A saída deve
indicar, por exemplo, “Índice 0: teclado”  */

let produtos = ["teclado", "mouse", "monitor", "webcam", "fone"];
produtos.forEach((produto, indice) => {
    console.log(produto, indice);
});
