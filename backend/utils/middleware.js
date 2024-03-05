const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const tokenExtractor = (request,response,next) => {
   
    const authorization = request.get('authorization');
    console.log(authorization)
    if(authorization && authorization.startsWith('Bearer '))
    {
        console.log("middleware working");
    request.token = authorization.replace('Bearer ','');
        
    next();
        
    }
    else
        return response.status(401).json({'error':"invalid token"});

    
}
const userExtractor = async (request ,response, next) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
        if(!decodedToken.id)
        {
            return response.status(401).json({
                "error":"invalid token"
            })
        }
    
    const user = await User.findById(decodedToken.id);

    request.user = user;
    next()   
}
module.exports = {tokenExtractor, userExtractor};