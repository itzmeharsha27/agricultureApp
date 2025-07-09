const mongoose =require('mongoose')


const UserSchema= new  mongoose.Schema({
    name:'string',
    email:'string',
    password:'number'
})

module.exports =mongoose.model("User",UserSchema)