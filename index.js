var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var fundo = {
    url: "./imgs/fundo.png"
}

var Vaca = {
    url: "./imgs/Vaca.png"
}

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
Vaca.imagem = new Image();
Vaca.imagem.src = Vaca.url;

fundo.imagem.addEventListener("load", carregaFundo);
Vaca.imagem.addEventListener("load", carregaVaca);

function carregaFundo(){
    papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca(){
    var numeroVacas = numeroAleatorio(2, 10);

    for(var i=0; i<numeroVacas; i++){

        var xA = numeroAleatorio(100, 400);
        var yA = numeroAleatorio(100, 400);
        papel.drawImage(Vaca.imagem, xA, yA);
    }
}

function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var z = 10;

for(var i=0; i<z; i++){
    console.log(numeroAleatorio(100, 200))
}