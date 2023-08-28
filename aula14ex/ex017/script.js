function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Digite um número')
    }else {
        let n = Number(num.value)
        let c = ''
        tab.innerHTML = ''
        for(c; c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}