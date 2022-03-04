const app = require('./app');
const {Router} = require('express');
const router = Router();
app.listen(app.get('port'));
console.log('server on port', app.get('port'));