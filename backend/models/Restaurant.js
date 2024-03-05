const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    restaurantName: String,
    type: String,
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
module.exports = mongoose.model('Restaurant',RestaurantSchema);