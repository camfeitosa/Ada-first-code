// Cadastrar turma contendo

// código, number entre 1 e 10 (no máximo 10 turmas)
// máximo, number máximo de alunos de 5 a 10

//Relacionamento
//Entidades: Turma e aluno

//Cadastrar turma
// Turma com o código existente = duplicado


// EXEMPLO DO PROF

const turma = {
    codigo: 0,
    maximoDeAlunos: 0 
}

const turmas = []

// Cadastro de turmas
// Turma com o código já existente
const cadastrarTurma = ({codigo, maximoDeAlunos}) => {

    // const turmaEncontrada = turmas.filter(turma => turma.codigo === codigo).length
    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo)

    codigo = parseInt(codigo)
    maximoDeAlunos = parseInt(maximoDeAlunos)

    if(!codigo || !maximoDeAlunos){
        try{
            throw new Error('Erro de sintaxe')
        }catch(erro){
            // erro
            console.log('ALGO DEU ERRADO!!!')
            return
        }
    }

    console.log('CHEGOU AQUI...')

    if(codigo < 1 || codigo > 10 && maximoDeAlunos < 5 || maximoDeAlunos > 10){
        throw new Error('O codigo ou o maximo de alunos esta fora do escopo planejado')
    }

    if(!turmaEncontrada){
        turmas.push({ codigo, maximoDeAlunos})
    }

    return turmas
}

// console.log(turma)
console.log('SAÍDA', turmas)



    // const turma = 
    //     {
    //         codigo: 10, 
    //         maximo: 10
    //     }


    // const turmas = []

    // const cadastrarTurma = ({codigo, maximo}) => { // transformar em objeto para saber os parâmetros no console 

    //    console.log(turmas.find(turma => turma.codigo === codigo))
    //    turmas.push({ codigo, maximo}) //adiciona valor no final
    //    return turmas
    // }

    // cadastrarTurma({codigo: 1, maximo: 10}) //objeto
    // cadastrarTurma({codigo: 1, maximo: 10}) // sem 'código' repetido

    // console.log(turmas)

// console.log(turma)
