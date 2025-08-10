const { sendTextMessage } = require('../services/whatsapp.service');
const { verifyTokenHandler, verifySignature } = require('../utils/verifyToken');
const parseMessage = require('../utils/messageParser');

async function verifyWebhook(req, res) {
  return verifyTokenHandler(req, res);
}

async function receiveMessage(req, res) {
  try {
    // opcional: verificar assinatura se APP_SECRET estiver configurado
    if (verifySignature && typeof verifySignature === 'function') {
      const valid = verifySignature(req);
      if (valid === false) {
        console.warn('Assinatura inválida');
        return res.sendStatus(403);
      }
    }

    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const messages = changes?.value?.messages;

    if (messages && messages.length > 0) {
      const msg = messages[0];
      const from = msg.from;
      const text = msg.text?.body || '';
      const intent = parseMessage(text);

      let reply = 'Olá! Para agendar, envie: AGENDAR. Para ver preços, envie: PREÇOS.';

      if (intent.type === 'agendar') {
        reply = 'Perfeito! Me diga: serviço (corte/barba/combo), data (DD/MM) e horário (HH:MM).';
      } else if (intent.type === 'preco') {
        reply = 'Corte R$40 | Barba R$30 | Combo R$60.';
      } else if (intent.type === 'saudacao') {
        reply = 'Olá! Bem-vindo à ALFA Barbearia. Como posso ajudar?';
      }

      await sendTextMessage(from, reply);
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error('Erro no receiveMessage:', err);
    return res.sendStatus(500);
  }
}

module.exports = { verifyWebhook, receiveMessage };
