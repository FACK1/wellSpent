const express = require('express');

const app = express();
const path = require('path');
const router = require('./router');

require('env2')('.env');

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.listen(process.env.PORT || 5000);
console.log('PORT WWORK IN 5000');
