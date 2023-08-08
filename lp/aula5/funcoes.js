const minhaFuncao = (a, b, c = 2, ... arg) => {
    const [notas] = arg
    console.log({a, b, c, notas})
    // console.log(arg)
}

minhaFuncao('mateus', 25, 1033, 'notas: 3, 4, 5')



// const minhaFuncao = (... arg) => {
//     // console.log({a, b, c})
//     console.log(...arg) 
// }

// minhaFuncao('mateus', 25, 1033, 'notas: 3, 4, 5')

