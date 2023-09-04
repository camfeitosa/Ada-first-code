// tudo é uma subclasse no JS (subclasse do Object)

class A {
    // metodo1(param1: number, param2: number ): number
    // metodo1(param1: number, param2: number ): number
    metodo1(param1, param2){ // JS

    }
}

// mudar a maneira que os operadores funcionam
// sistemas de coerção


Object.prototype.toString // converter em string
Object.prototype.valueOf // converter em número

class B{
    constructor(){
        this.a = 10
    }
    toString(){
        return "abc";
    }

    valueOf(){
        return 50;
    }
    toJSON(){
        return {
            a: this.a
        }
    }
}

const a1 = new B()


// a1 + a2
// {} + {}

console.log(1 + a1) 
console.log("a" + a1)

const a = {}
a.toString()

console.log(JSON.stringify(a1)) // Transformar a instancia de uma classe em um objeto simples




