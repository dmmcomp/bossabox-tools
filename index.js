require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_POST}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/model');

app.use('/tools', require("./src/routes"));
app.listen(3000);

module.exports = app

