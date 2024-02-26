const express = require('express');
const morgan = require('morgan');
const mainArchRouter = require('./routes/arch/getArchRoutes.js');
const getCodeRouter = require('./routes/code/getCodeRoutes.js');

const app = express(); 

app.use(morgan('dev')); 
app.use(mainArchRouter,getCodeRouter)



module.exports = app; // is required by index.js