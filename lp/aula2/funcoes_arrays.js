// array

const array1 = [1,2,3,4] // array1[0] -> 1
const array2 = [
    [1,2,3,4],
    [4,5,5,6],
    [6,7,8,9],
    [10, [11, 12]]
]

console.log(array2[0]) // [1,2,3,4],
console.log(array2[0][0]) // 1
console.log(array2[1][3]) // 6

console.log(array2[3][1][0])



console.clear()

const contatos = [
    {nome: 'Camila', sobrenome: 'Feitosa', numero: 12345567},
    {nome: 'Camila', sobrenome: 'Feitosa', numero: 12345567},
    {nome: 'Camila', sobrenome: 'Feitosa', numero: 12345567},
    {nome: 'Camila', sobrenome: 'Feitosa', numero: 12345567},
]

//foreach
//map
//filter
//reduce 
//concat


const array1 = [1,2,3,4] // array1[0] -> 1
const array2 = [
    [1,2,3,4],
    [4,5,5,6],
    [6,7,8,9],
    [10, [11, 12]]
]

console.log(array2[0]) // [1,2,3,4],
console.log(array2[0][0]) // 1
console.log(array2[1][3]) // 6

console.log(array2[3][1][0])

// Desenvolver lista de contatos, cada contato deve possuir
// nome, sobrenome, numero
// ordenação

const contatos = [
    { nome: 'Marcos', sobrenome: 'Lins', numero: 123456789 },
    { nome: 'Marcos2', sobrenome: 'Lins2', numero: 123456780 },
    { nome: 'Marcos3', sobrenome: 'Lins3', numero: 123456781 },
    { nome: 'Marcos4', sobrenome: 'Lins4', numero: 123456782 },
]

contatos[4] = { nome: 'Marcos5', sobrenome: 'Lins5', numero: 123456782 },
contatos.push({ nome: 'Marcos6', sobrenome: 'Lins6', numero: 123456782 })

// funções/métodos de array
// forEach *
// map *
// filter
// reduce
// concat

// contatos.forEach((item, index) => {
//     const { nome, ...novoItem } = item
//     console.log(novoItem)
//     console.log(`${index}: ${nome} ${sobrenome}`)
//     // console.log(valor)
// })

const contatosEditados = contatos.map((item, index) => {
    return item.nome === 'Marcos3' ? {
        ...item,
        numero: 123
    } : item
})


contatos.filter((item, index) => {
  
})



console.clear()
console.log(contatosEditados)