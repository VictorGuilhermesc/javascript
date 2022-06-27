function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if (fsex[0].checked ){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
               img.src = 'imagens/bebe-menino.jpg'
            }
            else if (idade < 21){
               img.src = 'imagens/jovem-homem.jpg'
            }
            else if (idade < 50){
               img.src = 'imagens/homem-adulto.jpg'
            }
            else{
               img.src = 'imagens/idoso.jpg'
            }
       } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 20){
               img.src = 'imagens/bebe-menina.jpg'
            }
            else if (idade < 21){
               img.src = 'imagem/jovem-mulher.jpg'
            }
            else if (idade < 50){
               img.src = 'imagem/mulher-adulta.jpg'
            }
            else{
               img.src = 'imagem/idosa.jpg'
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}
    