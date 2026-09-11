 let totalDisciplina = parseInt(prompt("informe o número de disciplina que você tem:"));
 let horaDisciplina =  parseFloat(prompt("informe quantas horas por disciplina que você tem:"));
 let diasEstudo =  parseInt(prompt("informe quantos dias você estudou:"));

 let totalHora = horaDisciplina * totalDisciplina;
 let totalPerido = totalHora * diasEstudo;

 alert (" o total de horas que você estuda por dia é de" +totalHora.toFixed(2));
 alert ("O total de horas que você estudou pelo seu período é de " +totalPerido.toFixed(2));