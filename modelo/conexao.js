const mongoose = require('mongoose');

// Configuração da conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', { // Banco de dados: livraria
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso.'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Exporta a instância do mongoose
module.exports = mongoose;
