let numero1, resultado;

function multiplicar(n1)

{
    let quadrado = Number(n1) **2;
    let cubo = Number(n1) **3;
    document.getElementById("mensagem").innerHTML = "O do numero digitado é: " + numero1 + 
    "<br>O quadrado do numero é: " + quadrado + 
    "<br>O cubo do numero é: "  + cubo;
}

function solicitaEntradaDados()
{
    numero1 = Number(prompt("digite o numero: "));

    multiplicar(numero1);
}

function processar()
{

       numero1 = document.getElementById("numero1").value;

    multiplicar(numero1);
}

let f, c;

function multiplicar()

var f = Number( prompt("Digite a Temperatura em fahrenheit") );

var c = (f-32)*5/9;
document.write("<p> A Temperatira em Celsius " + c +"</p>")