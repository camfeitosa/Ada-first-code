// Variáveis / Tipo Nativos

// Booleano
// String ok
// Number ok
// Object
// Undefined ok


// Null
// Array

// var nome = 'Mateus'

var nome = 'Mateus', idade = 26
var sobrenome = nome = 'Paixão'


console.log(nome) // Mateus
console.log(typeof idade) // number
console.log(sobrenome) // Paixãoar a = b, c = 6

var b; //undefined
var a = b, c = 6
console.log(a) // undefined
console.log(b) // undefined
console.log(c) // 6


//boolean

console.log(typeof true) //boolean
console.log(typeof false)

console.log(typeof null) //object

let nome2 = 'Camila' 

console.log(nome2.charAt(0)) //valor específico da variável


// Falsy
// 0, "", null, undefined, [], NaN, false

// TODOS FALSY
console.log(!!0) // !! retorna booleano
console.log(!!null)
console.log(!!undefined)
console.log(!![].length)
console.log(!!NaN)
console.log(!!false)

console.log(!!1) // true

