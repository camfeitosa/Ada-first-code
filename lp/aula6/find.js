//find 
//findIndex

const parceiros = [
    {id: '1', nome:'Alice'},
    {id: '2', nome:'Mateus'},
    {id: '3', nome:'Breno'},
]

const parceiroFind = parceiros.find(parceiro => {
     return parceiro.id == '1'
})

console.log(parceiroFind) 


const numeros = [1,3,4]
// console.log(numeros)

const indexEncontrado = numeros.findIndex(numero => numero === 4)

console.log(numeros[indexEncontrado]) //index do array