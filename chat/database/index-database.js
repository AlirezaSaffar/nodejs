const pp = require('./nsql-database.js');
const sql = require('mssql')
class indexdata{
static getusers = async() => {
const pool = await pp;
const request= pool.request();
const res = await request.query('select id,username,password,contacts from users')
return res[0];

};
static setusers = async(username,password) => {
    const pool = await pp;
    const request= pool.request();
    request.input("Username", sql.NVarChar,username)
    request.input("Password", sql.NVarChar,password)
    request.input("Contacts",sql.NVarChar,"")
   await request.query(' insert into users (username,password,contacts) values (@Username,@Password,@Contacts)');
   
    
    };


}

module.exports= indexdata;