const express = require('express');
const path = require('path');
const dbConnect = require('./config/db.js');
const router = require('./routers/homeRouter.js');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config({
  path: './config/config.env',
});

dbConnect();

const app = express();

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(process.env.PORT, (err) => {
  if (!err) console.log(`Server is started at ${process.env.PORT}`);
  else console.log('Server is not started');
});
