# 🪒 ALFA Barbearia - WhatsApp Bot

![Banner](/images/banner.png)

<p align="center">
  <img src="https://img.shields.io/node/v/18" alt="Node Version">
  <img src="https://img.shields.io/github/license/seu-usuario/alfa-barbearia-bot" alt="License">
  <img src="https://img.shields.io/badge/deploy-Render-blue" alt="Deploy on Render">
</p>

Bot de WhatsApp para agendamento e atendimento automático da **ALFA Barbearia**, com integração oficial à **Meta/Facebook API**.  
Ideal para barbearias que querem atendimento 24h e gestão de horários.

---

## 📑 Tabela de Conteúdo

1. [Funcionalidades](#-funcionalidades)
2. [Tecnologias](#-tecnologias)
3. [Estrutura de Pastas](#-estrutura-de-pastas)
4. [Instalação](#-instalação)
5. [Execução Local](#️-execução-local)
6. [Deploy](#-deploy)
7. [Contribuindo](#-contribuindo)
8. [Licença](#-licença)

---

## ✨ Funcionalidades

- 🤖 Respostas automáticas personalizadas.
- 📅 Agendamento de horários via WhatsApp.
- 📲 Integração com Facebook Developer API.
- 🚀 Pronto para deploy no Render, Railway ou Docker.

---

## 🛠 Tecnologias

- **Node.js 18+**
- **Express.js**
- **Meta/Facebook Developer API**
- **Dotenv** para variáveis de ambiente

---

## 📂 Estrutura de Pastas

```bash
/src
 ├── config/        # Configurações gerais e variáveis de ambiente
 ├── controllers/   # Lógica das rotas
 ├── routes/        # Definição das rotas da API
 ├── services/      # Serviços e integrações externas
 ├── utils/         # Funções auxiliares
 └── index.js       # Ponto de entrada do servidor
.env.example        # Variáveis de ambiente
package.json        # Dependências e scripts
```

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/alfa-barbearia-bot.git
cd alfa-barbearia-bot
npm install
cp .env.example .env
```

---

## 🖥️ Execução Local

```bash
npm run dev
```

Servidor: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deploy

Compatível com:

- [Render](https://render.com) (plano grátis disponível)
- [Railway](https://railway.app) (plano grátis disponível)
- Docker + VPS

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit: `git commit -m 'Minha nova feature'`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📜 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.

---

## 👤 Autor

**Djavan** — Desenvolvedor e mantenedor oficial.
