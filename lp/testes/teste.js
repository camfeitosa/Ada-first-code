// Definindo as estruturas de dados
const turmas = [];
const alunos = [];

// Função para cadastrar turma
function cadastrarTurma(codigo, maximo) {
    if (codigo < 1 || codigo > 10 || maximo < 5 || maximo > 10) {
        console.log("Erro: Código ou número máximo de alunos inválido.");
        return;
    }
    
    turmas.push({ codigo, maximo });
}

// Função para cadastrar aluno
function cadastrarAluno(nome, sobrenome, email, turma, nascimento, notas) {
    if (turma < 1 || turma > 10) {
        console.log("Erro: Turma inválida.");
        return;
    }

    // Verificar outras restrições e validações antes de cadastrar o aluno

    alunos.push({
        nome,
        sobrenome,
        email,
        turma,
        nascimento,
        notas,
        ativo: true
    });
}

// Função para remover aluno
function removerAluno(email) {
    const index = alunos.findIndex(aluno => aluno.email === email);
    if (index !== -1) {
        alunos.splice(index, 1);
    }
}

// Função para atualizar informações do aluno
function atualizarAluno(email, novosDados) {
    const aluno = alunos.find(aluno => aluno.email === email);
    if (aluno) {
        Object.assign(aluno, novosDados);
    }
}

// Função para buscar um aluno específico
function buscarAluno(email) {
    return alunos.find(aluno => aluno.email === email);
}



// Exemplos de uso
cadastrarTurma(1, 7);
cadastrarTurma(2, 8);

cadastrarAluno("Camila", "Feitosa", "camfeitosa@gmail.com", 1, "05/07/2006", [7, 8, 6]);
cadastrarAluno("Murilo", "Simões", "murisinner@gmail.com", 2, "21/12/2004", [9, 8, 7]);

console.log(alunos);
