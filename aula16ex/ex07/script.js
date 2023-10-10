let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")

let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(){
        
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    }else{
        window.alert("Valor iválido ou ja encontrado na lista!")
    }
}