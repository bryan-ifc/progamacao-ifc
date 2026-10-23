let quantidade = 0;
for(let medicao =1; medicao <=8; medicao++) {
        let temperatura = number(prompt("Temperatura" + medicao + ":"));
        if (temperatura >5) {
                quantidade++
        }
}
console.