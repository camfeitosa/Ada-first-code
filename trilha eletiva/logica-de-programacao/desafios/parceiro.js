// utilize a seguinte variável:

const listaParceiros = [{ "parceirosId": "19660156627897", "nome": "Fernanda Santos" }, { "parceirosId": "23998058019370", "nome": "Rafael Souza" }, { "parceirosId": "92291338611", "nome": "Maria Silva" }, { "parceirosId": "55443795656", "nome": "Maria Souza" }, { "parceirosId": "77743761456", "nome": "Ana Costa" }, { "parceirosId": "47202302326", "nome": "Maria Ferreira" }, { "parceirosId": "58017232567", "nome": "Sofia Costa" }, { "parceirosId": "16733009491247", "nome": "Lucas Silva" }, { "parceirosId": "63351859919", "nome": "Rafael Souza" }, { "parceirosId": "84297701780", "nome": "Carlos Oliveira" }];

const parceiros = listaParceiros.reduce((acumulador, item) => {
  item.parceirosId.length === 11 ? acumulador.PF.push(item) : acumulador.PJ.push(item)

  return acumulador
}, {
  PF: [],
  PJ: []
})

console.log(parceiros.PF, ['pessoaFisica', 'parceirosId', 'nome'])
console.log(parceiros.PJ, ['pessoaJuridica', 'parceirosId', 'nome'])


// correção
// const valorInicial = {
//     PF: [],
//     PJ: [],
// }

// // CPF === 11 dígitos
// const agrupar = (agrupados, parceiro) => {
//     const tipoParceiro = parceiro.parceirosId.length === 11 ? 'PF' : 'PJ'

//     agrupados[tipoParceiro].push(parceiro)
//     return agrupados
// }

// const parceirosAgrupados = listaParceiros.reduce(agrupar, valorInicial)

// console.log(parceirosAgrupados)
