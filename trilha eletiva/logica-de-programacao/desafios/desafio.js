// Corrigido

const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

const produtos = reciboDeVenda.split(';').filter(Boolean)

const produtosSemRepeticao = [...new Set(produtos.map(produto => produto))]

const compra = produtosSemRepeticao.map(produto => {
    const [nome, valores] = produto.split('/')
    const [textoValor, textoCupom] = valores.split('=')

    const valor = +textoValor.replace('valor', '')
    const cupom = +textoCupom.replace('cupom', '')
    const quantidade = produtos.filter(item => item === produto).length

    return {
      produto: nome.slice(0,1).toUpperCase() + nome.slice(1),           valor, 
        cupom, 
        quantidade
    }
})

console.log(compra)


// const produtos = reciboDeVenda.split(';').filter(Boolean)

// const compra = produtos.map(produto =>{
//   const [nome, valores] = produto.split('/')
//   const [textoValor, textoCupom] = valores.split('=')

//   const valor = parseFloat(textoValor.replace('valor', '')) // + ou parse 
//   const cupom = +textoCupom.replace('cupom', '')
//   const quant = produtos.filter(item => item === produto).length

//   // console.log({nome, valores, cupom, quant})

//   return{
//     produto: nome,
//     valor,
//     cupom,
//     quant
//   }
// })

// console.log(compra)