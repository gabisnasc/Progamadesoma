
function inicio() {
    let soma = 0;

    let numero = 0;

    numero = window.prompt("Insira um número inteiro positivo.")
do {
    numero = parseInt(numero)

    soma = soma + numero;

    numero = window.prompt
    ("O resultado da soma é de: " + soma + " \n Insira outro número ou digite 0 para encerrar.")
   } while (numero != "0")
   
   document.getElementById("result").innerHTML = ("Fim" + soma + "</span>");
}

