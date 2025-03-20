document.write ("<h2>Valor da parcela</h2>");

var valor = Number( prompt("Digite o valornda prestação em atrso") );
var taxa = Number( prompt("Digite os juros %") );
var tempo = Number( prompt("Digite os dias de atraso") );

var valordaparcela = valor + (valor*(taxa**2/100)*tempo);
document.write("<p> A parcela é " + valordaparcela +"</p>")

