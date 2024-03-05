const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    passwordHash: String,
    

});

UserSchema.set('toJSON',{
    transform: (document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
})
module.exports = mongoose.model('User',UserSchema);