const pp = require('./nsql-database.js');
const sql = require('mssql')


class userdata{
static insertcontact = async(user1,user2,users) =>{
var i;
var text1 =users[user1]["contacts"];
text1 = text1 + "-" + users[user2]["id"];
var text2 =users[user2]["contacts"];
text2 = text2 + "-" + users[user1]["id"];
const pool = await pp;
const request= pool.request();
request.input("Contacts1",sql.NVarChar,text1)
request.input("Contacts2",sql.NVarChar,text2)

request.query("update users set contacts = '"+text1+"' where id ='"+toString(user1)+"'")
request.query("update users set contacts = '"+text2+"' where id ='"+toString(user2)+"'")
if(user1>user2){
 var tablename= users[user1]["username"]+"-" + users[user2]["username"]
request.query("create table "+tablename+" (sender text, message text ) ")
}else{
    var tablename= users[user2]["username"]+"-" + users[user1]["username"]
    request.query("create table "+tablename+" (sender text, message text ) ")
}

}
static getcontacts = async(userid,users)=>{
var i,contacts;
for(i=0;i<users.lentgh;i++){
    if(users[i]["id"]==userid){
        contacts  =  users[i]["contacts"].split('-');
        break;
    }
}
return contacts;
}
}
module.exports=userdata;