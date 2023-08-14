// DESAFIO FINAL

// Cadastrar turma contendo
// código, number entre 1 e 10 (no máximo 10 turmas)
// máximo, number máximo de alunos de 5 a 10

// Relacionamento 
// Entidades: Turma e Aluno

const turma = {
    codigo: 0,
    maximoDeAlunos: 0 
}

const alunos = [];


let turmas = [{"codigo":1,"maximoDeAlunos":10},{"codigo":2,"maximoDeAlunos":4},{"codigo":3,"maximoDeAlunos":7},{"codigo":4,"maximoDeAlunos":8},{"codigo":5,"maximoDeAlunos":5}]

// Cadastro de turmas

// Turma com o código já existente
const cadastrarTurma = ({codigo, maximoDeAlunos}) => {

    // const turmaEncontrada = turmas.filter(turma => turma.codigo === codigo).length
    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo)

    codigo = parseInt(codigo)
    maximoDeAlunos = parseInt(maximoDeAlunos)

    if(!codigo || !maximoDeAlunos){
        throw new Error('Erro de sintaxe')
    }

    if(codigo < 1 || codigo > 10 && maximoDeAlunos < 5 || maximoDeAlunos > 10){
        throw new Error('O codigo ou o maximo de alunos esta fora do escopo planejado')
    }

    if(!turmaEncontrada){
        turmas.push({ codigo, maximoDeAlunos})
    }

    return turmas
}

const turmaASerAtualiza = {
    codigo: 2,
    maximoDeAlunos: 10 
}

// turmas = [
//     {
//         codigo: 4,
//         maximoDeAlunos: 10 
//     },
//     {
//         codigo: 2,
//         maximoDeAlunos: 6 
//     },
//     {
//         codigo: 6,
//         maximoDeAlunos: 5 
//     },
// ]

const atualizarTurma = (turmaParaAtualizar) => {
    // const { codigo } = turmaParaAtualizar
    if(turmaParaAtualizar == undefined){
        return {
            status: 'erro'
        }
    }

    if(turmaParaAtualizar.codigo < 1 
    || turmaParaAtualizar.codigo > 10 
    || turmaParaAtualizar.maximoDeAlunos < 5 
    || turmaParaAtualizar.maximoDeAlunos > 10){
        throw new Error('O código ou máximo alunos está fora do escopo planejado')
    }

    const indexEncontrado = turmas.findIndex(turma => {
        return turma.codigo === turmaParaAtualizar.codigo
    })

    if(indexEncontrado < 0) throw new Error('Turma não encontrada')

    const turmasAtualizado = turmas.map((turma, index) => {
        if(indexEncontrado === index){
            return turmaParaAtualizar
        }

        return turma
    })

    turmas = turmasAtualizado

    return {
        status: 'sucesso'
    }
}


console.log('SAÍDA', turmas)
//cadastrarTurma({codigo: 7, maximoDeAlunos: 10})


// Cadastrar aluno contendo:
// 	- nome,
// 	- sobrenome, 
// 	- email, 
// 	- turma, *number* (sendo um código de turma válido)
// 	- nascimento, sendo a data de nascimento do aluno
// 	- notas, sendo um array de números, de no máximo 5 posições
// 	- ativo, *boolean* // padrão true

// Idade do aluno
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    const idade = hoje.getFullYear() - dataNasc.getFullYear();

    if (hoje.getMonth() < dataNasc.getMonth() || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
        return idade - 1;
    }

    return idade;
}

// Cadastrar aluno em uma turma existente
function cadastrarAluno(nome, sobrenome, email, codigoTurma, nascimento, notas) {
    // Verifica se a turma existe
    const turma = turmas.find(turma => turma.codigo === codigoTurma);
    if (!turma) {
        console.log("Erro: Turma não encontrada.");
        return;
    }

   // Verifica se já existe um aluno com o mesmo nome ou email
   const alunoExistente = alunos.find(aluno => aluno.nome === nome || aluno.email === email);
   if (alunoExistente) {
       console.log("Erro: Já existe um aluno com o mesmo nome ou email.");
       return;
   }

   // Verifica se o aluno é menor de 16 anos 
   const idadeAluno = calcularIdade(nascimento);
    if (idadeAluno < 16) {
        console.log("Erro: O aluno é menor de 16 anos e não pode ser cadastrado.");
        return;
    }

     // Verifica o número de notas e limita a um máximo de 5 notas
     if (notas.length > 5) {
        console.log("Erro: O número de notas excede o limite de 5.");
        return;
    }
    
    const aluno = {
        nome,
        sobrenome,
        email,
        turma: codigoTurma,
        nascimento,
        notas,
        ativo: true
    };

    // Adiciona o aluno ao final 
    alunos.push(aluno);

    console.log("Aluno cadastrado com sucesso na turma:", codigoTurma);
}


// Remover aluno
function removerAluno(email) {
    const index = alunos.findIndex(aluno => aluno.email === email);
    if (index !== -1) {
        alunos.splice(index, 1);
    }
}


// Atualizar informações do aluno
function atualizarAluno(email, novosDados) {
    const aluno = alunos.find(aluno => aluno.email === email);
    if (aluno) {
        Object.assign(aluno, novosDados);
    }
}

// Buscar um aluno específico
function buscarAluno(email) {
    return alunos.find(aluno => aluno.email === email);
}


cadastrarAluno("Camila", "Feitosa", "camfeitosa@gmail.com", 1, "05/07/2006", [7, 8, 6, 7]); //Aluna com turma existente

cadastrarAluno("Murilo", "Simões", "murisinner@gmail.com", 4, "21/12/2004", [9, 8, 7]); //Aluno com turma existente

cadastrarAluno("Maira", "Ferreira", "maira@gmail.com", 2, "09/09/2006", [9, 8, 7]); //Aluno com turma existente

cadastrarAluno("Rafa", "Silva", "rafaa@gmail.com", 10, "22/12/2005", [9, 8, 7]); //Aluno com turma não cadastrada

cadastrarAluno("Camila", "Feitosa", "camfeitosa@gmail.com", 1, "05/07/2006", [7, 8, 6]); //Aluna repetida

cadastrarAluno("Lais", "Matos", "lala@gmail.com", 5, "11/07/2006", [7, 8, 6, 10, 6, 8]); //Mais de 5 notas

cadastrarAluno("Paulo", "Santos", "santinhos@gmail.com", 3, "11/07/2016", [7, 8, 6, 10]); //Menor de 16 anos


console.log('Alunos cadastrados: ', alunos);

removerAluno("camfeitosa@gmail.com"); //remover Camila

console.log(`Aluno restante: `, alunos); //Murilo e Maira


