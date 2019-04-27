
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

const apiRouteExport = require('./app/routing/apiRoutes.js');
const htmlRoutesExport = require('./app/routing/htmlRoutes.js');
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./app/public'));

apiRouteExport(app); 
htmlRoutesExport(app);
app.listen(PORT, function (){
    //console.log(htmlRouteExport);
    console.log('listening on port 3000')
});