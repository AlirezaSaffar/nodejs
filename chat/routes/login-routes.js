const express = require('express');
const data = require('../database/index-database.js')
const _ = require('loadash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const ex = express.Router();
const logincontroler = require('../controler/login-controler.js')
ex.post('/', logincontroler.login(req,res))
module.exports = ex;
