function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12){
    img.src = './imagens/foto-manha.jpg'
    document.body.style.background = '#e9cbb3'
}else if (hora >= 12 && hora < 18){
    img.src = './imagens/foto-tarde.jpg'
    document.body.style.background = '#ff9b04'
}else{
    img.src = './imagens/foto-noite.jpg'
    document.body.style.background = '#715679'
}
}