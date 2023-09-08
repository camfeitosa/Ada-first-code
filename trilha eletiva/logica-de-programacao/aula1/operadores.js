//Operadores de atribuição
// Operadores aritméticos
    // +, -, *, /...

    //operadores lógicos aritméticos
        // > , <, <=, >= 
        // comparação !=, !===, ===, ==

//Operadores de coerção

let idade = 17

let idadeSomada = idade + 1

console.log(idadeSomada)

let a = '10'
let b = 10

console.log(a > b) //retorna boolean
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(a == b) //false
console.log(a === b) // false -> tipo e valor
console.log(a != b) // false


//coerção +, -

console.log(+a) //10
console.log(-b) //10

let True = true //1
let False = false //0

// console.log(!!1) //true
// console.log(!!0) //false

console.log(+True)
console.log(+False)
console.log(-True)
console.log(-False)

//parseInt = faz coerção de tipos de dados para inteiros decimais

let abc = '10'
let def = parseInt(abc)
console.log(abc, def) //abc = string / def = number

//Operadores lógicos
// &&,||, ! [and, or, not]

let e = true
let f = false

console.log(e && f) // false
console.log(e || f) // true
console.log(!e) // negando a var = false
console.log(!f) // true



