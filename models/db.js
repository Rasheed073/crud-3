const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employessDB', {useNewUrlParser: true}, (err)=>{
    if(!err) {console.log("MongoDB conection seceeded")}
    else {console.log("Error in DB connection" + err)}
});

require('./employee.model')