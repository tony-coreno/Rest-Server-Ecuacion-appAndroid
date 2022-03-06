const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const cors = require("cors");


//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//midlewers
app.use(morgan("dev"));
app.use(express.json()); // Permite trabajar con archivos JSON con el servidor
app.use(express.urlencoded({extended: false})) // Permite trabajar con Formularios con el servidor
app.use(cors({ origen: "*" }));

// --------- Routes ---------
/*Main Route */
app.use(require('./routes/mainroute'));
app.get('/', (request,response) => {
    response.send('WEB SERVICE TERESA');
});


module.exports = app;
