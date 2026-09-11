let alturaTijolo = parseFloat(
  prompt("Qual a altura do tijolo em centimetros?"),
);
let larguraTijolo = parseFloat(
  prompt("Qual a largura do tijolo em centimetros?"),
);
let alturaParede = parseFloat(
  prompt("Qual a altura da parede em centimetros?"),
);
let larguraParede = parseFloat(
  prompt("Qual a largura da parede em centimetros?"),
);
let areaTijolo = alturaTijolo * larguraTijolo;
let areaParede = alturaParede * larguraParede;
let cimento = (3 / 100) * areaParede;
let quantidadeTijolos = (areaParede - cimento) / areaTijolo;
alert("Sua parede deu" + quantidadeTijolos.toFixed(2) + "tijolos");
