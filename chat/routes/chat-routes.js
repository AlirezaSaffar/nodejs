const express = require('express');
const data = require('../database/index-database.js')
const _ = require('loadash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkuser = require('../middle wares/checktoken.js');
const { constants } = require('buffer');
const { Int } = require('mssql');
const ex = express.Router();
const datauser = require('../database/user-database.js')
const datachat = require('../database/chat-database.js')
const chatcontroler = require('../controler/chat-controler.js')
ex.use('/',checkuser.checkto);


ex.get('/:id1/:id2/:name1/:name2', chatcontroler.upload(req,res))
ex.post('/',chatcontroler.refresh(req,res))
module.exports = ex;