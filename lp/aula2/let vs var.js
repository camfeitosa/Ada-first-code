//let e const

let valor = 'Camila' //string
valor = 19 //number
valor = true //boolean

console.log(typeof valor)

const valorImutavel = 'Aula'//const
valorImutavel = false //error -> valor é imutável

console.log(valorImutavel)

//escopo global - var

{ //escopo 
    let prof = 'Mateus'
    var prof = 'Mateus' //funciona
}
console.log(prof) //error -> a variável está dentro de um escopo