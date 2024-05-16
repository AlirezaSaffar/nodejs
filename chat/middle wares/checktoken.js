
const jwt = require('jsonwebtoken')
require('dotenv').config()
function checkto(req,res,next){
 var token = req.header("Authorization")
 if(!token){res.status(401).send();
}else{
    try{
 var ch= jwt.verify(token,process.env.SECRET_KEY);
 req.user =ch;
 next();
}catch(er){
    res.status(400).send();
 }
 }

}
module.exports=checkto;