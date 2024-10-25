const formulario = document.querySelector('#formulario');
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');
const isbn = document.querySelector('#isbn');
const alerta = document.querySelector('#alerta');
const enviar = document.querySelector('#enviar');
const tabela = document.querySelector('#tabela');
const tbody = document.querySelector('#tabela tbody');
const limpar = document.querySelector('#limpar');

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
            <td><button class="remover-livro"><i class="fa-solid fa-xmark"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
    };

    removerLivro() {
        console.log('Botão funcionando!')
    }

    limparTabela() {
        this.livros = [];
        this.atualizarTabela();
    }
};

const biblioteca = new Biblioteca();

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    titulo.value;
    autor.value;
    isbn.value;
    if (titulo.value === '' || autor.value === '' || isbn.value === '') {
        console.log('Insira um livro válido');
        alerta.style.display = 'block';
        return;
    }

    const novoLivro = new Livro(titulo.value, autor.value, isbn.value);
    biblioteca.adicionarLivro(novoLivro);
    alerta.style.display = 'none';
    titulo.value = '';
    autor.value = '';
    isbn.value = '';
    
});

const removerLivro = document.querySelectorAll('.remover-livro');
removerLivro.addEventListener('click', () => {
    removerLivro();
})

limpar.addEventListener('click', () => {
    console.log('Botão funcionando')
    biblioteca.limparTabela();
})