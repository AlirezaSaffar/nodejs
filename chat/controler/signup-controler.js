

class signupcontroler {
static signup = async(req,res)=>{
    var username = req.body.name;
var password = req.body.password;
var hashpass= bcrypt.hash(password,8)
var users = data.getusers();
var i,check;
check = true;
for(i=0;i<users.lentgh;i++){
    if(users[i]["username"]===username){

        check = false;
        break;
    }
    
}
if(check){
data.setusers(username,password);
}else{res.status(403).send();}

}

}
module.exports= signupcontroler
