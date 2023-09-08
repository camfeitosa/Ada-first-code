
function retornaIMC({altura, peso}){
    const imc = peso / (altura * altura)
    
    if (imc < 18.5){
        console.log(` O imc é igual a: ${imc.toFixed(2)} | Abaixo do peso`) 
    } else if (imc >= 18.5 && imc < 24.9){
        console.log(` O imc é igual a: ${imc.toFixed(2)} | Peso normal`) 
    } else if (imc >= 25 && imc < 29.9){
        console.log(` O imc é igual a: ${imc.toFixed(2)} | Sobrepeso`) 
    } else if (imc > 30) {
        console.log(` O imc é igual a: ${imc.toFixed(2)} | Obesidade`) 
    }

}

retornaIMC({altura: 1.78, peso: 80})
retornaIMC({altura: 1.78, peso: 20})
retornaIMC({altura: 1.20, peso: 180})