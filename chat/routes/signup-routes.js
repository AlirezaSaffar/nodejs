const express = require('express');
const data = require('../database/index-database.js')
const _ = require('loadash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ex = express.Router();
const signupcontroler = require('../controler/signup-controler.js')
ex.post('/', signupcontroler.signup(req,res))
module.exports = ex;