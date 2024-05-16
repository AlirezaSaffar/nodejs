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
const usercontroler = require('../controler/user-controler.js')
ex.use('/',checkuser.checkto);
ex.post('/', usercontroler.upload(req,res))
ex.get('/search/:username', usercontroler.search(req,res))
module.exports = ex;