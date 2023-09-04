
class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
        console.log(`${this.nome} está ligado`);
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
        console.log(`${this.nome} está desligado`);
            return
        }
        this.ligado = false;
    }
}

class Celular extends Dispositivo{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const c1 = new Celular('Samsung', 'Preto', 'Galaxy M31')
c1.ligar()
console.log(c1)

const dispositivo1 = new Dispositivo('Notebook')
dispositivo1.desligar()
console.log(dispositivo1)

// const dispositivo2 = new Dispositivo('Pc')
// dispositivo2.deligar()
// console.log(dispositivo2)
