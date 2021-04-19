function frete(){
    document.getElementById("frete").style.display = "block";
}
function cupom(){
    let desconto = 0;
    if(document.getElementById("text_cupom").innerText == "jih9090")
    {
        document.getElementById("valido").style.display = "block";
        desconto = 20;
    }
    else{
        document.getElementById("invalido").style.display = "block";
    }
    document.getElementById("desconto").innerText = "Descontos - R$ "+desconto+",00";
}
function gerar()
{
    document.getElementById("cupom").innerText = "jih9090";
}
function calcular()
{
    let total = 0;
    let produtos = document.getElementsByName("produtos");
    let Quantidade = document.getElementsByName("Quantidade");
    

    
    for(var i=0; i < produtos.length; i++)
    {
        if(produtos[i].checked)
        {
            total += parseInt(produtos[i].value) * parseInt(Quantidade[i].value);
            
        }
    }


    document.getElementById("total").innerText = "R$ "+total+",00";
    

    $("#catalogo").submit(function(event){
        event.preventDefault();
        $('.modal').modal();
    })


}



 



