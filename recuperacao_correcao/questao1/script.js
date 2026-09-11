let areaIrrigada = parseFloat(prompt("Qual é a àrea total irrigada(em m²)?"));
let quantidadeAgua = parseFloat(prompt("infome a quantidade total de água utilizada"));
let areaSetor = parseFloat(prompt("Informe a área total do setor(em m²)"));

let consumoMetro = quantidadeAgua / areaIrrigada;
let aguaSetor  = areaSetor * consumoMetro
let diferencaSetor = aguaSetor - 500;

alert ("O consumo de água por metro quadrado foi de " +consumoMetro.toFixed(2));
alert ("O consumo de água do setor foi de " +aguaSetor.toFixed(2));
alert ("a diferença de do consumo do setor e de 500 litros foi de " +diferencaSetor.toFixed(2));
