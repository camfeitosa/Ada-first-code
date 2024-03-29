
// const map = new Map()
// map.set("chave1", 20)
// map.set("chave2", 20)

// map.get("chave1")

// map.forEach((valor: any, chave: any ) => {

// })

// new Map([
//     ["chave1", 10],
//     ["chave2", 20]
// ])

// map.size;

// const set = new Set()

class Biblioteca {
    constructor() {
        this.livros = new Map();
        this.internet = new Internet(this);
    }
    adicionarLivro(livro) {
        if(!(livro instanceof Livro)) {
            throw new Error("livro precisa ser uma instancia de Livro");
        }
        if(this.livroExiste(livro.nome)) {

        }
        this.livros.set(livro.nome, livro);
    }
    livroExiste(nome) {
        return this.livros.has(nome);
    }
}

class Internet {
    constructor(biblioteca) {
        this.biblioteca = biblioteca;
    }
    abrirSite(url) {

    }
    abrirDiscord() {

    }
    verificarLivroNaInternet(livro) {
        this.biblioteca.livroExiste(livro)
    }
}

class Livro {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}


const biblioteca = new Biblioteca();

const meuLivro = new Livro("Harry Potter e o código filosofal", "um livro magico para aprender tudo sobre códigos secretos");

biblioteca.adicionarLivro(meuLivro);

biblioteca.livroExiste("Harry Potter e o código filosofal 2");