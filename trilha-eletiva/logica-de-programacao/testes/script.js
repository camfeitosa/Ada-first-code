// TESTARRRRRRRRRRRRRRRRRRRRRRRRRRRRR
const turmas = [];

// Cadastro de turmas
// Verificar se a turma com o código já existe
const cadastrarTurma = ({ codigo, maximoDeAlunos }) => {
    codigo = parseInt(codigo);
    maximoDeAlunos = parseInt(maximoDeAlunos);

    if (isNaN(codigo) || isNaN(maximoDeAlunos)) {
        console.log('ALGO DEU ERRADO!!!');
        return;
    }

    if (codigo < 1 || codigo > 10 || maximoDeAlunos < 5 || maximoDeAlunos > 10) {
        throw new Error('O código ou o máximo de alunos está fora do escopo planejado');
    }

    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo);

    if (!turmaEncontrada) {
        turmas.push({ codigo, maximoDeAlunos });
    }

    console.log('CHEGOU AQUI...');
    return turmas;
}

console.log('ANTES', turmas);
cadastrarTurma({ codigo: 8, maximoDeAlunos: 10 });
console.log('SAÍDA', turmas);