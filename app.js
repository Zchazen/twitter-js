var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var app = express();
app.use(morgan('dev'));

// swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

var routes = require('./routes/');
app.use('/', routes);
app.use(express.static(__dirname + '/public'));


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at http://%s:%s', host, port);

});


// app.get('/', function (req, res) {
//   //res.send('hello, world and friends!')
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })