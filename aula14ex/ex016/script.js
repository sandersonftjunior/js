function cont(){


var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

    if(ini.length == 0 ||fim.length == 0 || passo.length ==0){
    res.innerHTML = ('Impossivel calcular, tente novamente.')
} else if(passo <0){
    res.innerHTML = ('Números negativos não são aceitos, tente novamente')
}

var i = Number(ini);
var f = Number(fim);
var p = Number(passo);

if (p <=0){
    res.innerHTML = ('Invalido')
}else if(i < f){
    for(i;i <= f; i += p){
        res.innerHTML += `${i} 👉`;
    }
}else{
    for(i;i >= f; i -= p)
    res.innerHTML += `${i} 👉`;

}
{
    res.innerHTML += '✋';

}
}