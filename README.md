# swing-bot
Swing Trading Telegram Bot Signal Bybit
```bash
swing-bot/
├── config.js         // konfigurasi API dan strategi
├── indicators.js     // logika EMA, RSI, dsb
├── notifier.js       // kirim notifikasi ke Telegram
├── fetcher.js        // ambil data harga
├── bot.js            // main script
├── package.json
```
Install dependensi
```bash
npm install axios
```
Isi config.js dengan benar
```bash
nano config.js
```
```bash
node bot.js
```
Cek Lokasi executable Node.js di sistem 
```bash
which node
```
Add cron
```bash
crontab -e

*/15 * * * * /usr/bin/node /path/to/swing-bot/bot.js >> /path/to/swing-bot/logfile.log 2>&1
@reboot /usr/bin/node /path/to/swing-bot/bot.js >> /path/to/swing-bot/logfile.log 2>&1

crontab -l
sudo systemctl enable cron
sudo systemctl start cron
sudo tail -f /var/log/syslog | grep cron
```
