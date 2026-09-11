let pc = parseInt(prompt(""));
let consumoPc = parseFloat(prompt(""))
let consumo = (pc * consumoPc);
let plano;

if (consumo <= 100) {
    plano = "Plano básico";
} else if (consumo <=300) {
    plano = "Plano empresarial";
} else {
    plano = "Plano corporativo";
}

alert (plano);