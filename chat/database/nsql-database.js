const sql = require('mssql');
require('dotenv').config()
const confing ={
user :  process.env.USERNAME,
password : process.env.PASSWORD,
server:process.env.SERVER,
database: process.env.DATABASE_NAME
}
const pp= new sql.ConnectionPool(confing).connect().then(
    pool=>{return pool;}
).catch();
module.exports= pp;