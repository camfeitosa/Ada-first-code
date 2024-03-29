
// Média das Avaliações de um Fast-Food
 
// Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:


// Avaliação   | Total de Clientes
// ----------- | -----------
// 1 estrela   | 2
// 2 estrelas  | 15
// 3 estrelas  | 18
// 4 estrelas  | 25
// 5 estrelas  | 40

// - Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia; retorne o valor da nota média considerando o valor fixo de 100 clientes.

const avaliacoes = {
    1: 2,
    2: 15,
    3: 18,
    4: 25,
    5: 40
  }
  
  const totalAvaliacoes = Object.values(avaliacoes).reduce((total, atual) => total += atual, 0)

  let media = 0
  for (const i in avaliacoes) {
    media += (avaliacoes[i] * i) / totalAvaliacoes
  }
  console.log(`Média: ${media.toFixed(2)}`)