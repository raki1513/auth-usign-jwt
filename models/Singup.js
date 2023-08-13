const mongoose = require("mongoose")

let Singup = new mongoose.Schema (
    {
        email: { 
            type: String, 
            required: true, 
            unique: true
         },
         username: { 
            type: String, 
            required: true, 
            unique: true
         },
        password: { 
            type: String, 
            required: true 
        },
        confirmPassword:{
            type: String, 
            required: true 
        },
        dateOfBirth: { 
            type: String 
        },
        phoneNumber: { 
            type: String 
        },
        gender: {
             type: String 
            },
      
    }
)

module.exports = mongoose.model('Singup',Singup);