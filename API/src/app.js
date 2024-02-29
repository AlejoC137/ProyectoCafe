const express = require('express');
const morgan = require('morgan');
const mainArchRouter = require('./routes/arch/getArchRoutes.js');
const getCodeRouter = require('./routes/code/getCodeRoutes.js');
const { run } =  require('./dataBase/dataBase.js')

const app = express(); 

app.use(run); // <- brings conects the client to mongodb 
app.use(morgan('dev')); //<- says hi! 
app.use(mainArchRouter,getCodeRouter) //<- sets the routers before use 



module.exports = app; // is required by index.js