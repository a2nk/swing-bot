// indicators.js
function calculateEMA(data, period) {
  const k = 2 / (period + 1);
  let emaArray = [];

  // Gunakan SMA untuk nilai EMA pertama
  const sma = data.slice(0, period).reduce((sum, item) => sum + item.close, 0) / period;
  emaArray[period - 1] = sma;

  for (let i = period; i < data.length; i++) {
    const prevEMA = emaArray[i - 1] || sma;
    const ema = data[i].close * k + prevEMA * (1 - k);
    emaArray[i] = ema;
  }

  return emaArray;
}

function checkEMACrossover(data, shortPeriod = 20, longPeriod = 50) {
  const shortEMA = calculateEMA(data, shortPeriod);
  const longEMA = calculateEMA(data, longPeriod);

  const i = data.length - 1;
  const prev = i - 1;

  if (shortEMA[prev] < longEMA[prev] && shortEMA[i] > longEMA[i]) {
    return 'buy';
  } else if (shortEMA[prev] > longEMA[prev] && shortEMA[i] < longEMA[i]) {
    return 'sell';
  }
  return null;
}

module.exports = {
  calculateEMA,
  checkEMACrossover
};

