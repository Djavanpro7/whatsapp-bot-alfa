// parser simples: classifica intenções básicas
module.exports = function parseMessage(text) {
  if (!text) return { type: 'unknown' };
  const t = text.toLowerCase();

  if (t.includes('agendar') || t.includes('marcar')) return { type: 'agendar' };
  if (t.includes('preço') || t.includes('preco') || t.includes('valor')) return { type: 'preco' };
  if (t.includes('oi') || t.includes('olá') || t.includes('ola') || t.includes('bom')) return { type: 'saudacao' };
  return { type: 'unknown' };
};
