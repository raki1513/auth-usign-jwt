const jwt = require('jsonwebtoken')
module.exports = function (req,res,next){
    try{
        let token = req.header('x-token')
    if(!token){
        return res.status(400).send('x-token')  
    }
    let decode = jwt.verify(token,'jwtsecret' ,{ algorithms: ['HS256'] })
    req.user = decode.user
    next();
    }
    catch(err){
        return res.status(400).send("Server sided Error")
    }

}
