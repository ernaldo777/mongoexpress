const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const livrosRouter = require('./routes/livros'); // Importa o router de livros

const app = express();

// Configurações padrão
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/livros', livrosRouter); // Adiciona as rotas de livros

// Tratamento de erros 404 (rota não encontrada)
app.use((req, res, next) => {
  res.status(404).json({ mensagem: 'Rota não encontrada' });
});

// Tratamento de outros erros
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
      mensagem: 'Ocorreu um erro no servidor',
      erro: req.app.get('env') === 'development' ? err.message : {}
  });
});

module.exports = app;
