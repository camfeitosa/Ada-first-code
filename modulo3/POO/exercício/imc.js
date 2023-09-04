class Pessoa{
    #nome
    #peso
    #altura
    #imc
    constructor(nome, peso, altura){
        this.#nome = nome;
        this.#peso = peso
        this.#altura = altura;
        this.#imc = this.calculaIMC();
    }

    //set imc
    calculaIMC(){
        return(this.#peso / (this.#altura * this.#altura)).toFixed(2)
    }
    
    //getters 

    get nome(){ //transforma em atributo
        return this.#nome;
    }

    get peso(){
        return this.#peso;
    }

    get altura(){
        return this.#altura;
    }
    
    get imc(){
        return this.#imc;
    }

    //setters

    set nome (novoNome){
        this.#nome = novoNome;
    }
    
    set altura (novaAltura){
        this.#altura = novaAltura;
        this.#imc = this.calculaIMC();  // recalcula o IMC quando a altura é alterada
    }
    
    set peso (novoPeso){
        this.#peso = novoPeso;
        this.#imc = this.calculaIMC();
    }
}

let pessoa1 = new Pessoa('Rafaela', 60, 1.80)
console.log(`Nome: ${pessoa1.nome}`)
console.log(`IMC: ${pessoa1.imc}`)

pessoa1.nome = "Rafael"
pessoa1.peso = 82
pessoa1.altura = 1.74

console.log(`Nome: ${pessoa1.nome}`)
console.log(`IMC: ${pessoa1.imc}`)