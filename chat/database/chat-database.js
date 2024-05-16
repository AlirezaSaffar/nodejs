
const pp = require('./nsql-database.js');
const sql = require('mssql')

class chatdata{
static getmessages = async(nametable)=>{
    const pool = await pp;
    const request= pool.request();
   var mess= request.query("select (sender,message) from "+nametable);
   return mess[0];
}
static sendmessage = async(tablename,message,sender)=>{
    const pool = await pp;
    const request= pool.request();
    request.input("Message",sql.Text,message)
    request.input("Sender",sql.Text,sender)
    request.query("insert into"+tablename+"(sender , message) values (@Sender,@Message)")
    var respond = request.query("select sender,message from "+tablename);
    return respond;

    

}
static update = async(tablename)=>{
    const pool = await pp;
    const request= pool.request();
    var respond = request.query("select sender,message from "+tablename);
    return respond;
}
}
module.exports=chatdata