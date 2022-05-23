import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    idClient: {type: Number, required: [true, 'Please add an id client'], unique: true},
    userName: {type: String, required: [true, 'Please add an username'], unique: true},
    
    account: {type: Number, required: [true, 'Please add an account'], unique: true}, 
    money: {type: Number, required: [true, 'Please add a value']}
                
                
    
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);