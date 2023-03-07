const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser')
require('dotenv').config();

const Port = process.env.Port;

// routes 
const route_users = require('./routes/users/user');
const route_product = require('./routes/products/product');
const app = express() 
app.use(cors({
    origin: `*`,
    methods:["GET", "POST"]
 }));
app.use(bodyparser.json())
app.use(route_users);
app.use(route_product);

app.listen(Port, () => {
    console.log('server is up at port:' + Port);
})