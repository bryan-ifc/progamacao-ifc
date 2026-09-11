let cnh = prompt("Você tem CNH?");
let idade = parseInt(prompt("Você tem quantos anos?"));
if (idade <18 && cnh == false) {
    alert("Você não tem idade nem CNH, não pode dirgir");
} else if ( idade > 18 && cnh == false) {
    alert("Você tem mais de 18, mas não tem CNH, você não pode dirigir");
} else if ( idade > 18 && cnh == true) {
    alert("Você não tem mais de 18 nem CNH, você não pode dirigir");
}