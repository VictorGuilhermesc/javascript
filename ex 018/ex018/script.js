var numbers = new Array()
for(var c =1; c <=4; c++){
    numbers = window.prompt('Digite alguns numeros')
}
for( var i in numbers){
    console.log(numbers[i])
}