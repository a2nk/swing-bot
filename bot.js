// bot.js
const { getPriceData } = require('./fetcher');
const { checkEMACrossover } = require('./indicators');
const { sendTelegramMessage } = require('./notifier');
const config = require('./config');

async function runBot() {
  const candles = await getPriceData();
  if (candles.length < config.emaLong + 1) {
    console.error('Data candlestick tidak cukup untuk hitung EMA.');
    return;
  }

  const signal = checkEMACrossover(candles, config.emaShort, config.emaLong);

  if (signal === 'buy') {
    await sendTelegramMessage('📈 *Sinyal BELI Terdeteksi* (EMA Crossover)');
  } else if (signal === 'sell') {
    await sendTelegramMessage('📉 *Sinyal JUAL Terdeteksi* (EMA Crossover)');
  } else {
    console.log('Tidak ada sinyal saat ini.');
  }
}

runBot();

