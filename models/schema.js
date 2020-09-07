const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/signup/user');
const Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

let userSchema = new Schema({
    firstName: String,
    LastName: String,
    emails: String,
    passwords: String,
    numbers: String,
    createdDate:{
        type:Date,
        default:Date.now
    }
});


userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
userSchema.methods.validatePassword = function(plainPassword, hashPassword){
    return bcrypt.compareSync(plainPassword, hashPassword)
}

module.exports= mongoose.model('user', userSchema);