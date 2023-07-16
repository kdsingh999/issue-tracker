const express = require('express');

const app = express();

app.listen(5000, (err) => {
  if (!err) console.log('Server is started');
  else console.log('Server is not started');
});
