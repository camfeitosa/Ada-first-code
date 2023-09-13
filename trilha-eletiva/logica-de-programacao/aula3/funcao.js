
// FUNÇÕES

function fazAlgo(){ //escopo da funcao
    console.log('OIE <3')
}

fazAlgo()

const nome = 'Camila'

// typescript
const somar = function(valor1, valor2){
    return valor1+valor2
}

let resultaado = somar(1, 4) 
console.log(resultaado)

resultaado = resultaado+1
console.log(resultaado)

const numeros = [1, 2, 3, 4]

// const mostraValor = (valor, index) => {
//     console.log(index, valor)
// }

const mostraValor = (valor) => {
    return valor +2 + 3
}

const result = numeros.map(mostraValor)
console.log(result)

numeros.map(mostraValor) //mostra função no map - point free

const multiplicar = (numero) => numero * 2
console.log(multiplicar(2))

const add = (numero) => numero + 3
console.log(add(2)) //5 = passou o parametro 2
