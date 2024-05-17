const datauser = require('../database/user-database.js');
const data = require('../database/index-database.js');

class usercontroler{
    static upload = async(req,res)=>{
        var users = data.getusers();
        var i,j;
        var token = req.header("Authorization");
  
        for(i=0;i<users.lentgh;i++){
          if(users[i]["username"]===token.nametoken){
              break;
          }
        }
      var cont;
      var con =  users[i]["contacts"];
      var conarray = con.split('-');
      var re;
      for(j=0;j<conarray.lentgh;j++){
          var text = conarray[j];
          var idcontact = parseInt(text,10);
          idcontact--;
          cont = {
              namecontact : users[idcontact]["username"] ,
              id : idcontact
          }
      re[j] = cont;
      }
      res.send(re);
  
    }

    static search= async(req,res)=>{
        var contactexist = false;
var usernamee = req.params.username;
var token = req.body("Authorization");
var check = true;
var n= token.idtoken;
var i;
var users = data.getusers();
var con = datauser.getcontacts(n+1,users);
for(i=0;i<con.lentgh;i++){
    if(con[i]==usernamee){check=false;res.send("the contact is in the list")}
}
if(check){
for(i=0;i<users.lentgh;i++){
    if(users[i]["username"]===usernamee){
     datauser.insertcontact(i+1,n+1,users);
     contactexist=true;
     res.send("new contact was found");
     break;
    }
}
}
if(!contactexist){
    res.send("contact dosent exist");
    }
}
}
module.exports= usercontroler
