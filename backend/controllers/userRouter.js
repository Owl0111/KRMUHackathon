const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User  = require('../models/User');



userRouter.post('/', async (req , res)=>{
    const {username,password,name,email} = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password,saltRounds);
    const user = new User({
        username,
        email,
        passwordHash,
        name,
    })
    const savedUser = await user.save();
    res.status(201).json(savedUser);
})
userRouter.get('/:id', async (req,res) => {
    const id = req.params.id;
    const user = await User.findById(id)
    res.json(user);
})
userRouter.get('/',async (req, res) => {
    const users = await User.find({})
    res.json(users);
})
module.exports = userRouter;