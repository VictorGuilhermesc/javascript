function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    if (hora >= 4 && hora <= 12){
        msg.innerHTML = `São ${hora}:${minutos}:${segundos}da manhã`
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = ''
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML = `São ${hora}:${minutos}:${segundos} da tarde`
        img.src = 'imagens/tarde.jpg'
    }
    else {
        msg.innerHTML = `São ${hora}:${minutos}:${segundos} da noite`
        img.src = 'imagens/noite.jpg'
    }
}