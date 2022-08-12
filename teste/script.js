function somar(){
    var n1 = document.getElementById("n1txt")
    var n2 = document.getElementById("n2txt")
    var res = document.getElementById("res")
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    res.innerHTML = `A soma entre ${n1} e ${n2} é ${n1 + n2}`
}