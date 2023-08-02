// operador lógico de decisão -> OPERADOR TERNÁRIO

// Estamos em uma festa, onde só é permitido
// Maiores de 16 anos

// condição ? verdadeiro : falso

//RIVISAR = TERNÁRIO

var ehMaiorDe16 = false
var podeEntrar =  ehMaiorDe16 ? 'Pode entrar' =D  : 'Não pode entrar =D'

console.log(podeEntrar)


// operador de coalescência
// ??

console.log(0 || 'teste') // 
console.log(0 ?? 'teste')


var a2 = undefined || 'teste1'
var b2 = "" || 'teste2'
var c = NaN || 'teste3'
var d = 0 || 'teste4'

console.log(a2) // teste1 
console.log(a2) // teste2
console.log(a2) // teste2
console.log(b2) // undefined
console.log(c) // undefined
console.log(d) // undefined