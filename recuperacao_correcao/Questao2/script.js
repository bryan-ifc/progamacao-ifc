let quantidadepagina = parseFloat(prompt("Informe o total dd páginas a serem digitadas"));
let atualDigitadores = parseInt(prompt("Informe quantos digitadores estão digitando atualmente"));
let tempoEstimado = parseFloat(prompt("Informe o tempo estimado para terminar o trabalho com os trabalhadores atuais"));
let novosDigitadores = parseInt(prompt("Informe o numéro de novos digitadores que serão adicionados na equipe"));

let paginahoraEstimada = tempoEstimado  / quantidadepagina;
let totalDigitador = atualDigitadores + novosDigitadores;
let regradeTres = (atualDigitadores * tempoEstimado) / novosDigitadores;
let regradeTres2 = regradeTres * 60;

alert ( )
