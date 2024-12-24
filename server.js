const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

//const menu = require('./models/menu');

app.get('/',(req,res)=>{
    res.send("Welcome to the Server");
});

//import router file
const menuRouter = require('./Routes/menuItemRoutes');
app.use('/menu',menuRouter);


app.listen(8000,()=>{console.log("Server is connected")});