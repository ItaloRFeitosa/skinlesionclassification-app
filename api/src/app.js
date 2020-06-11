const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors())
    .use(express.json())
    .use('/api/v1/', require('./routes'));

module.exports = app;