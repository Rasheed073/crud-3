require('./models/db')

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const employeeController =require('./controllers/employeeController')

var app = express();

app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + '/views/layouts/'}))
app.set('view engine', 'hbs');
app.listen(3000, ()=>{
    console.log('express server started at port:3000');
})

app.use('/employee' , employeeController)