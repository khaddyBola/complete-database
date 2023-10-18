const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {   
            type: Number,
            default: 4000
        }, 
        Editor: Number,
        Admin: Number
    },
    // role: {
    //     type: String,
    //     default: "User"
    //     //admin, editor
    // },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
})

const User = mongoose.model("User", userSchema)
module.exports = User