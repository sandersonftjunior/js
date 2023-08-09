function tabuada(){
    var n = document.getElementById('num')
    var t = document.getElementById('tabuada')
    if(num.value.length == 0){
        alert('Inválido, digite um número')
    }else{
    var n = Number(num.value)
    tabuada.innerHTMl = ''

    for(var c = 1; c <= 10; c++){
        var item = document.createElement
        item.text = `${n} x ${c} = ${n * c}`
        tabuada.appendChild('item');
    }
    }
}