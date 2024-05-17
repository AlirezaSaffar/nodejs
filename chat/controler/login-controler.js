const data = require('../database/index-database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class logincontroler{
  static login   = async(req,res)=>{
    var username = req.body.user;
var password = req.body.pass;
var users=  data.getusers();
var i;
for (i=0;i<users.lentgh;i++){
    if(users[i]["username"]==username){
    var check  =await bcrypt.compare(password,users[i][pas]);
    var tok,token;
    var isloggedin;
    tok={
       nametoken : username,
        idtoken : i,
    }
    if(check){
    token =jwt.sign(tok,process.env.SECRET_KEY);
    isloggedin=true;
 }else{
     token =jwt.sign(tok,"false");
     isloggedin=false;
 }
 break;
}
}
res.header('Authorization',token).send(isloggedin);

  }




}
module.exports= logincontroler
