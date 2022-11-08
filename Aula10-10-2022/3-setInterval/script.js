var idCrono1;

function incrementar(){
    cont = document.getElementById("cont").innerHTML++;
}

function play(){

    idCrono1 = setInterval(incrementar, 1000);
    statusBtn(true, false, false);
    
}

function pausar(){
    
    clearInterval(idCrono1);
    statusBtn(false, true, false);
    
}

function parar(){
    
    pausar();
    document.getElementById('cont').innerHTML = `0`;
    statusBtn(false, true, true);

}

function statusBtn(statusPlay, statusPause, statusParar){

    document.getElementById('btnPlay').disabled = statusPlay;
    document.getElementById('btnPause').disabled = statusPause;
    document.getElementById('btnParar').disabled = statusParar;

}