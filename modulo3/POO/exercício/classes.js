class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { //método
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Camila', 'Feitosa')
console.log(p1)
console.log(p1.falar())

