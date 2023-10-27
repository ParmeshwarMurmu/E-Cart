const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = (req, res, next)=>{

    const token = req.headers.authorization.split(" ")[1]
    // console.log("token", token);
    
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=> {
            // console.log(decoded)
            req.body.userId = decoded.userId,
            req.body.userName = decoded.userName,
            next()
          });

    } catch (error) {
        
    }


}

module.exports = {
    auth
}