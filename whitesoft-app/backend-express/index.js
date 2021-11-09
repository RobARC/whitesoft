const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

//console.log(process.env)

// inizilazamos
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
const whitelist = ['http//localhost:4000'];

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Public 
app.use(express.static('public'));

//Routes
app.use('/routes', require('./routes/routes'));
//app.use('/routes', (req, res) => res.send('Recibido'))

// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

