function cont(){


var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

    if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Impossivel calcular, tente novamente.')
    }else{
        res.innerHTML = ('Calculando...')
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p <=0){
            window.alert('Número invalido, considerando 1.')
            p = 1
        }

        if(i < f){
            for(i;i <= f; i += p){
    
            res.innerHTML += `${i} 👉`;
        }
        }else{
            for(i;i >= f; i -= p)
            res.innerHTML += `${i} 👉`;
        }
        res.innerHTML += `✋`;
        }
}

    