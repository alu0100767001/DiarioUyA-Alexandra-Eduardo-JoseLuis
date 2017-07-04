"use strict"
let express = require('express'),
	app = express();
var session = require('express-session');

//Configuramos el directorio de vistas
app.set('views', './views');
app.set('view engine', 'ejs');


app.use(express.static('./'));

//Página principal
app.get('/', function(req, res) {
	res.render('inicial');
});

//Fase login
app.get('/login', function (req, res) {
  res.render('login'); 	
});

app.set('port', (process.env.PORT || 8080));

let server = app.listen(app.get('port'), function () {
	console.log('Servidor escuchando en el puerto %s', app.get('port'));
});
