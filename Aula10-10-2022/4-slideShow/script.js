var slideShow = [
    {img: "celular1.jpg", nome: "Samsung", descricao: "Descrição do produto 1", valor:"R$ 2000"},
    {img: "celular2.jpg", nome: "Iphone", descricao: "Descrição do produto 2", valor:"R$ 500"},
    {img: "celular3.jpg", nome: "Lg", descricao: "Descrição do produto 3", valor:"R$ 1500"}
];

var pos = 1;
var timer;

function mudarImg(){

    document.getElementById('slideShow').src = `img/${slideShow[pos].img}`;
    document.getElementById('nome').innerHTML = `Nome: ${slideShow[pos].nome}`
    document.getElementById('descricao').innerHTML = slideShow[pos].descricao;
    document.getElementById('valor').innerHTML = `Valor: ${slideShow[pos++].valor}`;
    if(pos==3){
        pos=0;
    }
}

function play(){

    timer = setInterval(mudarImg, 2500);

}
function pause(){

    clearInterval(timer);

}