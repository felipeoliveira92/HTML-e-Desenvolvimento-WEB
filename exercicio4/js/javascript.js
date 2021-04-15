var historico = "";

function soma()
{
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var soma = n1 + n2;
    document.getElementById('result').value = soma;
        
    historico+=soma.toString()+" ";
    document.getElementById("historico").innerHTML = historico;
        
}
function subtracao()
{
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var subtracao = n1 - n2;
    document.getElementById('result').value = subtracao;

    historico+=subtracao.toString()+" ";
    document.getElementById("historico").innerHTML = historico;
               
}
function multiplicacao()
{
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var multiplicacao = n1 * n2;
    document.getElementById('result').value = multiplicacao;
        
    historico+=multiplicacao.toString()+" ";
    document.getElementById("historico").innerHTML = historico;
        
}
function divisao()
{
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var divisao = n1 / n2;
    document.getElementById('result').value = divisao;

    historico+=divisao.toString()+" ";
    document.getElementById("historico").innerHTML = historico;
        
}