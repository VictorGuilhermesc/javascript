
function contar() {
    var nfim = document.getElementById('txtf')
    var ninicio = document.getElementById('txti')
    var npasso = document.getElementById('txtp')
    var  res = document.getElementById('res')
    if(ninicio.value.length == 0 || nfim.value.length == 0 || npasso.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(ninicio.value)
        var f = Number(nfim.value)
        var p = Number(npasso.value)
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
    }
}