/*
25) Faça um programa em Javascript que leia o salário bruto de uma pessoa e calcule o desconto do
INSS levando em consideração o seguinte:
• Para salários até R$ 1.500,00 a alíquota de INSS será de 8%;
• Para salários acima de R$ 1.500,00 até R$ 3.500,00 a alíquota de INSS será de 10%;
• Para salários acima de R$ 3.500,00 a alíquota de INSS será de 12%.
● Controle de entrada com mensagem de erro: o salário bruto deverá ser positivo e inferior a
10 mil reais.
*/
let salarioBruto;
let INSS;
let salarioLiquido;
let somaLiquido = 0;
let contaEmprgados = 0;
let continuar;
//INÍCIO DO LAÇO PRINCIPAL
do {
// entrada
do {
    salarioBruto  = parseFloat(prompt("Informe o salário bruto"));
    if (salarioBruto <=0 || salarioBruto >=10000 || isNaN(salarioBruto) ) {
    alert ("valor inválido")
    alert ("Informe um valor válido")   
    }
    } while (salarioBruto <=0 || salarioBruto >=10000 || isNaN(salarioBruto))

//PROCESSAMENTO
    if (salarioBruto <= 1500) {
    INSS = salarioBruto * 0.08;
    } else if ( salarioBruto <=3500) {
    INSS = salarioBruto *0.1;
    } else {
    INSS = salarioBruto *0.12;
    }
    salarioLiquido = salarioBruto - INSS;
    alert ("Salário líquido: R$" +salarioLiquido.toFixed(2));

    somaLiquido = somaLiquido = salarioLiquido;
    contaEmprgados = contaEmprgados +1;
    
    continuar = prompt("Deseja informar outro salário? digite sim ou não")
    .toLowerCase(); 
} while (continuar == "sim");
//FIM DO LAÇO PRINCIPAL
let mediasalarioliquido = somaLiquido / contaEmprgados;