const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// SETTINGS

app.set('port', process.env.PORT || 3000);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// middlewares
app.use(morgan('dev'));

// routes


app.listen(app.get('port'),() =>{
	console.log('server is running in port 3000');
}); 