const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  GRAPH_VERSION: process.env.GRAPH_VERSION || 'v22.0',
  VERIFY_TOKEN: process.env.VERIFY_TOKEN,
  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN,
  WHATSAPP_PHONE_ID: process.env.WHATSAPP_PHONE_ID,
  APP_SECRET: process.env.APP_SECRET || null, // opcional, para verificar assinatura
};
