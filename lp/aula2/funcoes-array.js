// // funções/métodos de array
// // forEach 
// // map 
// // filter
// // reduce
// // concat


// const contatos = [
//     { nome: 'Marcos', sobrenome: 'Lins', numero: 123456789 },
//     { nome: 'Marcos2', sobrenome: 'Lins2', numero: 123456780 },
//     { nome: 'Marcos3', sobrenome: 'Lins3', numero: 123456781 },
//     { nome: 'Marcos4', sobrenome: 'Lins4', numero: 123456782 },
// ]

// console.log(contatos)

// contatos.forEach((item, index) => {
//     const {nome, ...novoItem} = item

//     console.log(novoItem)
//     console.log(`${index}: ${nome}`)
// });

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2)