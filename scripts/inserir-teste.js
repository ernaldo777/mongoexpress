const mongoose = require('../modelo/conexao');
const Livro = require('../modelo/livro-schema'); // Ajuste o caminho conforme necessário

(async () => {
    try {
        const novoLivro = await Livro.create({
            titulo: 'Livro de Teste  erfasgd',
            codEditora: 123,
            resumo: 'Este é um livro de teste.',
            autores: ['Autor 1', 'ernaldo'],
        });
        console.log('Documento inserido com sucesso:', novoLivro);
    } catch (err) {
        console.error('Erro ao inserir documento:', err);
    } finally {
        mongoose.connection.close(); // Fecha a conexão
    }
})();
