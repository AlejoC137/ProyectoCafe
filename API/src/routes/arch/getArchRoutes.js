const {
    getAllArch,
    // getAllDogsDb,
    // getRazaByID,
    // getDogByName,
    // postDogs,
    // getTemp
} = require("../../handlers/arch/archHandlers.js")

const {Router} = require('express');
const mainArchRouter = Router()

mainArchRouter.get("/arch" , getAllArch);



module.exports = mainArchRouter