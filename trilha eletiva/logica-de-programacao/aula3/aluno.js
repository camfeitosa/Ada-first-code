
const aluno = {
    nome: 'Mateus',
    turma: 1033,
    notas: [
        { materia: 'Lógica', nota: 8 },
        { materia: 'Redes', nota: 1 },
        { materia: 'Finanças', nota: 10 },
    ],
    calculaMedia: function() {
        console.log('Calcula ai')
        const media = this.notas.reduce((acc, current) => {
            return acc + current.nota
        }, 0)

        const total = media / this.notas.length 

        return media
    } //pair programming
}

 