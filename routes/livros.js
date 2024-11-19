const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

// Rota para obter todos os livros (GET /)
router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.status(200).json(livros);
    } catch (err) {
        console.error('Erro ao obter livros:', err);
        res.status(500).json({ mensagem: 'Erro ao obter livros' });
    }
});

// Rota para incluir um novo livro (POST /)
router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (err) {
        console.error('Erro ao incluir livro:', err);
        res.status(500).json({ mensagem: 'Erro ao incluir livro' });
    }
});

// Rota para excluir um livro pelo _id (DELETE /:id)
router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        await excluir(codigo);
        res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
    } catch (err) {
        console.error('Erro ao excluir livro:', err);
        res.status(500).json({ mensagem: 'Erro ao excluir livro' });
    }
});

// Exporta o router no padrão de módulo
module.exports = router;
