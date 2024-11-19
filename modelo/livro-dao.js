const Livro = require('./livro-schema');

// Função assíncrona para obter todos os livros
const obterLivros = async () => {
    try {
        return await Livro.find();
    } catch (err) {
        console.error('Erro ao obter livros:', err);
        throw err;
    }
};

// Função assíncrona para incluir um novo livro
const incluir = async (livro) => {
    try {
        return await Livro.create(livro);
    } catch (err) {
        console.error('Erro ao incluir livro:', err);
        throw err;
    }
};

// Função assíncrona para excluir um livro por código (_id)
const excluir = async (codigo) => {
    try {
        return await Livro.deleteOne({ _id: codigo });
    } catch (err) {
        console.error('Erro ao excluir livro:', err);
        throw err;
    }
};

// Exportação das funções no padrão de módulo
module.exports = {
    obterLivros,
    incluir,
    excluir,
};
