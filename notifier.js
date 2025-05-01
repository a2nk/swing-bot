// notifier.js
const axios = require('axios');
const config = require('./config');

async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: config.telegramChatId,
      text: message,
      parse_mode: 'Markdown'
    });
    console.log('Pesan Telegram terkirim:', message);
  } catch (error) {
    console.error('Gagal mengirim pesan Telegram:', error.message);
  }
}

module.exports = {
  sendTelegramMessage
};

