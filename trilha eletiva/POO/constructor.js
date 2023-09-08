class A {
    constructor(){
        // return new Promise(resolve: (value)=>  void => setTimeout(resolve, 5000))
    }

    async iniciar(){

    }
}

const a = new A()

await a.iniciar()

a = await new Promise()

console.log(a)