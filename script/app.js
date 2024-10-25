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
        this.livros = this.carregarLivros();
    }

    carregarLivros() {
        const livrosJSON = localStorage.getItem('livros');
        return livrosJSON ? JSON.parse(livrosJSON) : [];
    }

    salvarLivros() {
        localStorage.setItem('livros', JSON.stringify(this.livros));
    }

    adicionarLivro (livro) {
        this.livros.push(livro);
        this.salvarLivros();
        this.atualizarTabela();
    }

    atualizarTabela() {
        tbody.innerHTML = '';
        
        this.livros.forEach((livro, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.isbn}</td>
            <td><button class="remover-livro" data-index=${index}><i class="fa-solid fa-xmark"></i></button></td>
            `;
            tbody.appendChild(tr);
        });

        this.adicionarEventosRemocao();
    }

    adicionarEventosRemocao() {
        const removerLivro = document.querySelectorAll('.remover-livro');
        removerLivro.forEach(botao => {
            botao.addEventListener('click', evento => {
                const index = evento.target.closest('button').dataset.index;
                this.removerLivro(index);
            });
        });
    }

    removerLivro(index) {
        this.livros.splice(index, 1);
        this.salvarLivros();
        this.atualizarTabela();
        console.log('Livro removido');
    }

    limparTabela() {
        this.livros = [];
        localStorage.removeItem('livros');
        this.atualizarTabela();
    }
};

const biblioteca = new Biblioteca();
biblioteca.atualizarTabela();

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    
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

limpar.addEventListener('click', () => {
    console.log('Botão funcionando')
    biblioteca.limparTabela();
})