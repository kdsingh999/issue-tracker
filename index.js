const express = require('express');
require('dotenv').config({
  path: './config/config.env',
});
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, (err) => {
  if (!err) console.log(`Server is started at ${PORT}`);
  else console.log('Server is not started');
});
