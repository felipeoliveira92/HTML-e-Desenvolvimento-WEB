$("#cardapio").submit(function(event){
    event.preventDefault();
 
    let total = 0;
 
    let prato_principal = $(this).find("input[name='customRadio']:checked").val();

    if(prato_principal == null)
    {
        prato_principal = 0;
    }
 
    let acompanhamentos = 0;
 
    $(this).find("input[name='acompanhamento']:checked").each(function(i){
        acompanhamentos += parseFloat($(this).val());
    })

    let convenio = $(this).find("select[name='convenio'] option:selected").val();
 
    total += (parseFloat(prato_principal) + parseFloat(acompanhamentos)) - parseFloat(convenio);
 
    $('.modal-body h1').text("Total - R$"+total+",00");
    $("#p_principal").text("prato principal - R$"+prato_principal+",00");
    $("#acompanhamento").text("acompanhamentos - R$"+acompanhamentos+",00");
    $("#convenios").text("desconto/convênio - R$"+convenio+",00");
 
    $('.modal').modal();

})



 



