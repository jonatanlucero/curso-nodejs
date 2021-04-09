const express = require('express');
const app = express();
const path = require('path');
//setting
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //motor de plantilla, no es necesario el require
//middlewares

//routes
app.use(require('./routes/index'));
//static files
app.use(express.static(path.join(__dirname,'public')))
//port
app.listen(app.get('port'), () => {
    console.log("estoy escuchando puerto ",app.get('port'))
});