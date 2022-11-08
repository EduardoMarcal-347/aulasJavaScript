function conferir() {

    let txtValue = document.getElementById("txtValor").value;
    
    // padrão para telefone 99999-9999 ou 8888-8888:
    // let padrao =  /^\d{4,5}-\d{4}$/;

    // padrão deve começar com dois digitos :
    // let padrao = /^\d{2}/;

    // padrão deve terminar com dois digitos :
    // let padrao = /\d{2}$/;

    // padrao deve ter exatamente dois digitos
    // let padrao = /^\d{2}$/;

    // padrao para CEP 38.408-308:
    // let padrao = /^\d{2}\.\d{3}-\d{3}$/;

    // padrão para telefone (34)99999-9999 ou (34)8888-8888 (034)99999-9999 ou (034)8888-8888:
    // let padrao = /^\(\d{2,3}\)\d{4,5}-\d{4}$/;

    // padrao para validar numero de matricula. Ex: TSPI-1234, 
    // onde TSPI poderia ser LCO ou MKT, 
    // seguido de um traço + 4 a 5 numeros
    // let padrao = /^(TSPI)|(LCO)|(MKT)-\d{4,5}$/;

    // padrao: IFTM Uberlandia Centro ou
    //    IFTM            Uberlandia   Centro 
    // padrao = /^IFTM\s{1,5}Uberlandia\s{1,5}Centro$/

    // padrao para aceitar de 3 a 10 caracteres alfanumericos (letras ou numeros)
    // let padrao = /^\w{3,10}$/;

    // padrao para verificar todas as palavras compostas por um ou mais
    // das seguintes letras : a e i o u b c d f
    // let padrao = /^[aeioubcdf]{2,15}$/;

    // padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;

    if(padrao.test(txtValue)){
        alert("Padrão Valido");
    } else {
        alert("Padrão invalido");
    }

}