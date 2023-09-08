// Hoisting - içar
// Acontece quando é var e function

try {
    var a; //apenas a declaração = js já declara

    console.log(a)
    var a = 'Algum texto'
    console.log(a)

    console.log(c) //error, não foi definida em nenhum momento


    console.log(d) //não pode ser acessado antes da inicialização
    const d = 'Texto'
    console.log(d)

    console.log(e) //não pode ser acessado antes da inicialização
    let e = 'Texto'
    console.log(e)

} catch (error) {
    //console.log(error)
}


// Error, não pode ser acessado antes da inicialização
somar(1, 2)
const somar = (a, b) => {
    console.log(a + b)
}
somar(1, 2)

sub(5, 3)
function sub(a, b){
    console.log(a - b)
}
sub(5, 3)