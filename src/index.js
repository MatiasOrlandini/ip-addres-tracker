const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
require('dotenv').config()


app = express();

app.use(express.static('src/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/', routes());

app.listen(process.env.PORT);
