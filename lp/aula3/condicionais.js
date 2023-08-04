// Condicionais IF/ELSE
// Condicionais SWITCH
// Testes lógicos com 2 ou mais desvios

const idade = 16

const ehMaior = (idade >= 18) ? 'Verdadeira' : 'Falsa'

const ternarioAninhado = (idade >= 18) ? 'Verdadeira' : (idade === 16) ? 'Opa 16' : 'Outra'
console.log(ternarioAninhado) 


console.log(ehMaior)

if(idade >= 18){
    console.log('Vdd')
} else {
    console.log('Falsa')
}