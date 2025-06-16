# CurrencyDataFeed API v2 – Client SDKs

This repository contains auto-generated client SDKs for the [CurrencyDataFeed.com](https://currencydatafeed.com) API v2. It includes SDKs for PHP, Java, JavaScript, and other supported languages, generated from the OpenAPI 3.0 specification.

---

## 🌍 Base URL

```
https://currencydatafeed.com/api/v2/
```

---

## 🔐 Authentication

All endpoints require an API token.

### Preferred method (secure):
```
Authorization: Bearer YOUR_API_TOKEN
```

### Alternative (less secure):
```
https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN
```

---

## 📦 Available SDKs

- `/php/` – PHP Client
- `/java/` – Java Client
- `/javascript/` – JavaScript Client (Node.js)
- *(Add more languages as needed)*

---

## 📘 Key Endpoints

| Endpoint                         | Description |
|----------------------------------|-------------|
| `/available-symbols`            | List of available forex/crypto symbols |
| `/live-rates`                   | Real-time forex prices |
| `/convert`                      | Convert between currencies |
| `/source`                       | Get rates using a custom base currency |
| `/performance`                  | Percentage changes over multiple timeframes |
| `/history`                      | Daily historical OHLC data |
| `/timeframe`                    | OHLC data over a custom date range |
| `/intraday`                     | Minute/hour intraday OHLC data |
| `/levels`                       | Pivot & Bollinger Bands |
| `/ta`                           | Full technical indicators (RSI, MACD, etc.) |
| `/crypto-live`                  | Live crypto prices |
| `/crypto-live-extended`         | Exchange-specific crypto pair data |
| `/crypto-live-exchange`        | All pairs from a crypto exchange |
| `/crypto-history`              | Daily close price history for crypto |
| `/crypto-history-1m`           | 1-minute close price history (up to 48h) |
| `/crypto-extended-history`     | Daily extended crypto pair data (w/ exchange) |
| `/crypto-extended-history-1m`  | 1-minute extended crypto pair history |
| `/crypto-onchain`              | Bitcoin & crypto on-chain metrics |
| `/crypto-fg`                   | Fear & Greed Index |
| `/crypto-performance`          | Multi-period crypto performance %

---

## 🚀 Example Usage

### PHP
```php
require_once('php/vendor/autoload.php');
// Initialize and call an endpoint here
```

### JavaScript
```js
const ApiClient = require('./javascript');
const api = new ApiClient();
api.getLiveRates().then(console.log);
```

### Java
```java
// Integrate using Maven or Gradle
```

---

## 📄 License

Auto-generated SDKs provided as-is. You are free to modify or integrate them into your own tools.

---

## 📬 Contact

For support or commercial plans:  
📧 support@currencydatafeed.com  
🌐 https://currencydatafeed.com
