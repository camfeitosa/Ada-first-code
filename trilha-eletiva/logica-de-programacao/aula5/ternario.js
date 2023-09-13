//Ternário

const idade = 18
//const ehMaiorDeIdade = idade >= 18 ? true : false

const ehMaiorDeIdade = idade >= 18
console.log(ehMaiorDeIdade)

const apenasLeitura = false
const titulo = apenasLeitura ? 'Vizulizar' : 'Editar'
console.log(titulo)

// const tituloSecundario = apenasLeitura ? 'Vizulizar' : 'Editar'
// console.log(tituloSecundario)

let tituloSecundario = ''
 if(apenasLeitura){
    tituloSecundario = 'Visualizar'
 } else {
    tituloSecundario = 'Editar'
 }

 console.log(tituloSecundario)

