let quilos;
let excesso;
let multa;
do {
    quilos = parseFloat(prompt("Informe a quantidade de quilos"));
    if (quilos <=0 || peso >=150) {
        alert ("Informe um valor válido");
    }
} while (quilos <=0 || peso >=150);

if (quilos >50) {
    excesso = quilos - 50;
    multa = excesso *8;
} else {
    excesso = 0;
    multa = 0
}
if (excesso==0) {
    alert ("Não há multa");
 } else {
    alert ( "valor da multa = " +multa.toFixed(2));
 }
