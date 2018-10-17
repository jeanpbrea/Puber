const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/dist/public'));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(9001, ()=> console.log("This server is over 9000!!!"));