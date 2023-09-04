// .bind()
// cria a cópia de uma função, mas com this diferente

// .call()
// executa a função imediatamente

// .apply()
// executa a função...

const obj = {
    abc: 10,
    metodo(parametro1){
        console.log(this, parametro1)
    }
}

const obj2 = {
    abc: 50,
    xyz: "hehehe"
}

obj.metodo.call({}, 10) 
obj.metodo.apply({}, [10]) //array de parametros

const novometodo = obj.metodo.bind(obj2)
novometodo(3)

// obj.metodo.call(obj2)



function minhaFunction(){
    console.log(this)
}

minhaFunction.call(obj2)
minhaFunctionDefined = minhaFunction.bind({})



class A{
    constructor(){
        this.a = 10
    }
    metodo1(){

    }
}

class B{
    constructor(){
        this.b = 40
    }
    outrometodo(){

    }
}

const minhaInstancia = new A()
const minhaInstancia2 = new B()

minhaInstancia.metodo1.call(minhaInstancia2)

