function normal(){
    this
}

const flecha = () => { // arrays, map.. - evitar q o valor do this seja inesperado
    this
}

class abc{
    constructor(){
        this.a = [1, 2, 3, 4, 5]
        this.a.map(()=>{
            this
            a
        })

        this.a.map((function(){
            this //valor do objeto 
        })).bind(this) // .bind() para o this
    }
}