const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const webhookRoutes = require('./routes/webhook.routes');

const app = express();

// Body parsers: Important para receber JSON do Facebook
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    // mantém o rawBody em req.rawBody caso queira verificar assinatura
    req.rawBody = buf;
  }
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use('/webhook', webhookRoutes);

// Healthcheck simples
app.get('/', (req, res) => res.send('ALFA Bot - OK'));

// Start server (em plataformas como Railway, Render, Heroku, basta executar "npm start")
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
