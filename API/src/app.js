const express = require('express');
const morgan = require('morgan');
const getRouter = require('./routes/getRoutes');

const app = express(); 

app.use(morgan('dev')); 
app.use(getRouter)


module.exports = app; // is required by index.js