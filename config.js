// config.js
module.exports = {
  telegramBotToken: 'TOKEN_BOT_TELEGRAM',
  telegramChatId: 'CHAT_ID',
  symbol: 'BTCUSDT',
  interval: '15', // Bybit uses minute-based intervals like '15' for 15m
  emaShort: 20,
  emaLong: 50,
  dataLimit: 100,
  bybitApiUrl: 'https://api.bybit.com/v5/market/kline'
};

