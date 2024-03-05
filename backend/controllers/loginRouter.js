const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/User');
const { response } = require('express');

loginRouter.post('/',async (req, res)=>{
    const body = req.body;
    const {username, password} = body;
    console.log("body")
    const user = await User.findOne({username});
    console.log('user');
    const passwordCorrect  = user===null? false: bcrypt.compare(password,user.passwordHash);
    if(!(user && passwordCorrect))
    {
        res.status(401).send({
            'error': 'Username or password is wrong'
        })
    }
    const data = {
        username: username,
        id: user._id
    }
    const token = jwt.sign(data,process.env.SECRET)
    res.status(200).send({token,username:user.username,name:user.name})

})
module.exports = loginRouter;