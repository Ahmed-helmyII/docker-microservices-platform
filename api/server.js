const express = require('express');
const os = require('os');
const app = express();

const PORT = process.env.PORT || 4000;
const APP_ENV = process.env.APP_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    service: 'api',
    environment: APP_ENV,
    container_id: os.hostname()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT} in ${APP_ENV} mode`);
});