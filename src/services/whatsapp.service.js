const axios = require('axios');
const config = require('../config');

const GRAPH_VERSION = config.GRAPH_VERSION;
const PHONE_NUMBER_ID = config.WHATSAPP_PHONE_ID;
const WHATSAPP_TOKEN = config.WHATSAPP_TOKEN;

if (!PHONE_NUMBER_ID) throw new Error('Falta WHATSAPP_PHONE_ID no .env');
if (!WHATSAPP_TOKEN) throw new Error('Falta WHATSAPP_TOKEN no .env');

const client = axios.create({
  baseURL: `https://graph.facebook.com/${GRAPH_VERSION}`,
  headers: {
    Authorization: `Bearer ${WHATSAPP_TOKEN}`,
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

async function sendTextMessage(to, text) {
  const url = `/${PHONE_NUMBER_ID}/messages`;
  const body = {
    messaging_product: 'whatsapp',
    to: String(to),
    type: 'text',
    text: { body: text }
  };

  try {
    const { data } = await client.post(url, body);
    console.log('Mensagem enviada:', data);
    return data;
  } catch (err) {
    const status = err.response?.status;
    const payload = err.response?.data;
    console.error('Erro ao enviar mensagem:', status, JSON.stringify(payload || err.message));
    throw err;
  }
}

module.exports = { sendTextMessage };
