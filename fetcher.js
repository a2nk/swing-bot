// fetcher.js
const axios = require('axios');
const config = require('./config');

async function getPriceData() {
  try {
    const response = await axios.get(config.bybitApiUrl, {
      params: {
        category: 'linear',
        symbol: config.symbol,
        interval: config.interval,
        limit: config.dataLimit
      }
    });

    const rawData = response.data.result.list;

    // Format: [timestamp, open, high, low, close, volume, turnover]
    return rawData.map(entry => ({
      time: Number(entry[0]),
      open: parseFloat(entry[1]),
      high: parseFloat(entry[2]),
      low: parseFloat(entry[3]),
      close: parseFloat(entry[4]),
      volume: parseFloat(entry[5])
    })).reverse(); // Reverse to oldest -> newest

  } catch (error) {
    console.error('Gagal mengambil data dari Bybit:', error.message);
    return [];
  }
}

module.exports = { getPriceData };

