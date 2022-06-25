function carregar()
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var hora = 8
    if(hora >= 4 && hora < 12){
        mensagem.innerHTML = (`São ${hora} da manhã`)
    }