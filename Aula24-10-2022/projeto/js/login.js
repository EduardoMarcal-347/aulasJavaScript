function isThere(fieldUser, fieldPsw){
     
    fieldU = document.getElementById(fieldUser);
    fieldP = document.getElementById(fieldPsw);

    if(!fieldU.value){
        alertWifi('Usuário em branco', false, 0, "./img/toupeira.gif", 30);
        fieldU.focus();
    } else if (!fieldP.value) {
        alertWifi('Senha em branco', false, 0, "./img/toupeira.gif", 30);
        fieldP.focus();
    } else {
        readJSON(fieldU.value, fieldP.value);
    }

}

function readJSON(fieldU, fieldP){

    file = "./json/users.json";

    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, fieldU, fieldP))
        .catch(err => console.log("erro na leitura do JSON"));

}

function checkUser(content, user, senha){
    
    var achou = false;
    for(i=0; i<content.usuarios.length; i++){
        if(content.usuarios[i].user == user && content.usuarios[i].psw == senha){
            achou = true;
            break;
        }
    }
    if (achou){
        alertWifi('Bem vindo', false, 0, "./img/toupeira.gif", 30);
    }
    
}