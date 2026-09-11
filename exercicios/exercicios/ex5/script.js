let idadeCrianca = parseInt(prompt("Informe a idade da criança"));
let crianca = 8;
let entrada = 100;
let meiaEntrada;
let situacao;

if (idadeCrianca <= crianca) {
    meiaEntrada = entrada/2;
    situacao = "é criança";
} else if (idadeCrianca >crianca) {
    meiaEntrada = entrada;
    situacao= "Não é criança";
} else {
    alert ("Informe um número inteiro");
}

alert ("você " +situacao + " e vai pagar R$ " +meiaEntrada.toFixed(2));
