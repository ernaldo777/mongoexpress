const mongoose = require('./conexao'); // Importa o mongoose conectado

// Definição do esquema do Livro
const LivroSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    titulo: { type: String, required: true },
    codEditora: { type: Number, required: true },
    resumo: { type: String },
    autores: { type: [String], required: true },
});

// Criação do modelo 'Livro' para a coleção 'livros'
const Livro = mongoose.model('Livro', LivroSchema, 'livros');

// Exporta o modelo 'Livro'
module.exports = Livro;
