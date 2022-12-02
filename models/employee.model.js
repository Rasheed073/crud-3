const mongoose = require('mongoose')

var employeeScheema = new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }    
})

mongoose.model('employee',employeeScheema)