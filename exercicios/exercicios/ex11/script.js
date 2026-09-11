let idade = parseInt(prompt("Informe a sua idade"));
let categoria;

if (idade <= 12) {
    categoria = ("Infantil");
} else if (idade >=13 && idade <= 17) {
    categoria = ("Juvenil"); 
} else {
    categoria = ("Adulto")
}

alert ( " Sua categoria é " +categoria);