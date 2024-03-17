const server = require("./src/app.js")
// const {run} = require('./src/dataBase/dataBase.js')

const PORT = 3001
server.listen(PORT , ()=>{
    // run();
    console.log(`Listening on port ${PORT}`)
    


})



