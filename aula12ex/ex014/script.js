function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
//var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12){
    img.src = 'imagem/foto-manha.jpg'
}else if (hora >= 12 && hora < 18){
    img.src = 'imagem/foto-tarde.jpg'
}else{
    img.src = 'imagem/foto-noite.jpg'
}
}