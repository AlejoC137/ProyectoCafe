const {Router} = require('express');
const getRouter = Router()

getRouter.get("/code",(req,res)=>{ // when app uses get with the route / , res = res.status(200)...
    res.status(200).send('llegué Code')
});

// getRouter.get("/users/",(req,res)=>{ // when app uses get with the route / , res = res.status(200)...
//     res.status(200).send('llegué')
// });

// getRouter.get("/users/:id",(req,res)=>{ // when app uses get with the route / , res = res.status(200)...
//     res.status(200).send('llegué')
// });

//aaa
module.exports = getRouter