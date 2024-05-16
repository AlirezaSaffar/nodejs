const express = require('express');
require('dotenv').config()
const ex = express();
const signupRouter = require('./routes/signup-routes.js')
const loginRouter = require('./routes/login-routes.js');
const userRouter = require('./routes/user-routes.js');
const chatRouter = require('./routes/chat-routes.js')
ex.listen(process.env.APP_PORT);
ex.use('/login',loginRouter );
ex.use('/signup', signupRouter);
ex.use('/user',userRouter);
ex.use('/chat',chatRouter);

