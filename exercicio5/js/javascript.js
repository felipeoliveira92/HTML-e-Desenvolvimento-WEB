function calculamedia()
{
    var n1 = parseInt(document.getElementById("result1").value);
    var n2 = parseInt(document.getElementById("result2").value);
    var soma = n1 + n2;
    var media = soma/2;
    
    if(media < 5)
    {
        document.getElementById("result").innerHTML = "Reprovado";
        document.getElementById("image").src="./imagens/reprovado.jpg";
        document.getElementById("body").style.background="red";

    }
    else if(media < 6 && media >= 5)
    {
        document.getElementById("result").innerHTML = "Recuperação";
        document.getElementById("image").src="./imagens/recuperacao.jpg";
        document.getElementById("body").style.background="yellow";
    }
    else
    {
        document.getElementById("result").innerHTML = "Aprovado";
        document.getElementById("image").src="./imagens/aprovado.jpg";
        document.getElementById("body").style.background="green";
    }
        
    
        
}