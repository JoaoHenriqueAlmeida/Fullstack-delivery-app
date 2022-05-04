const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('../routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/images', express.static(path.resolve('public')));

// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
