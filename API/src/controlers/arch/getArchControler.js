const {Sequelize, Op} = require("sequelize");
const axios = require("axios");
// require('dotenv').config


const getAllArchControler = async () => {
    try {
        const testArchObject = {
            1:{ 
                name:'Hotel Heiss',
                locationName: 'Medellin'
                    },
            2:{ 
                name:'Hotel Click Clack 10B',
                locationName: 'Medellin'
                    },
                }
                
        return testArchObject
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  };

  module.exports = { 

    getAllArchControler
  
 };