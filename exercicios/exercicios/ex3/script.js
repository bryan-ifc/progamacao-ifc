let usuario = prompt("Informe o usuario");
let senha = prompt("Informe a senha");
let acesso;
if (usuario == "Bryan" && senha == "100" ) {
    acesso = "acesso permitido";
} else {
    acesso = " acesso negado";
}

alert(acesso);