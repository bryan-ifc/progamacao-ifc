let salarioAtual = parseFloat(prompt("Qual é o salário inicial?"));
let salarioNovo;

if(salarioAtual < 1500){
  salarioNovo = salarioAtual * 1.15;
}else if (salarioAtual <= 3000){
  salarioNovo = salarioAtual * 1.10;
}else{
  salarioNovo = salarioAtual * 1.05;
}
alert("O novo salário é R$" +salarioNovo.toFixed(2));