// Getters e Setters
// symbol
//ctrl shift L

const _velocidade = Symbol('velociadade')

// const s = Symbol() === Symbol()
// console.log(s)

class Carro{
    constructor(nome){
        this.nome = nome;
        this._velociadade = _velocidade;
    }

}