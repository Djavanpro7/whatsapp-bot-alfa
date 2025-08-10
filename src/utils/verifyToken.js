const crypto = require('crypto');
const config = require('../config');

function verifyTokenHandler(req, res) {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === config.VERIFY_TOKEN) {
    console.log('Webhook verificado!');
    return res.status(200).send(challenge);
  }

  console.warn('Falha na verificação do webhook.');
  return res.sendStatus(403);
}

// Verifica assinatura X-Hub-Signature-256 (opcional)
// Retorna true/false. Usa APP_SECRET se definido.
function verifySignature(req) {
  const appSecret = config.APP_SECRET;
  if (!appSecret) return true; // sem secret não verifica

  const signature = req.get('x-hub-signature-256') || req.get('X-Hub-Signature-256');
  if (!signature) return false;

  const [algo, hash] = signature.split('=');
  const expectedHash = crypto.createHmac('sha256', appSecret).update(req.rawBody).digest('hex');
  return hash === expectedHash;
}

module.exports = { verifyTokenHandler, verifySignature };
