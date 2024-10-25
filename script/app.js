const formulario = document.querySelector('#formulario');
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');
const isbn = document.querySelector('#isbn');
const enviar = document.querySelector('#enviar');
const tabela = document.querySelector('#tabela');
const tbody = document.querySelector('#tabela tbody');

class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
};

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro (livro) {
        this.livros.push(livro);
        this.atualizarTabela();
    }

    atualizarTabela() {
        tbody.innerHTML = '';

        this.livros.forEach(livro => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.isbn}</td>
            `;
            tbody.appendChild(tr);
        });
    };
};

const biblioteca = new Biblioteca();

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    titulo.value;
    autor.value;
    isbn.value;

    const novoLivro = new Livro(titulo.value, autor.value, isbn.value);
    biblioteca.adicionarLivro(novoLivro);

    titulo.value = '';
    autor.value = '';
    isbn.value = '';
});