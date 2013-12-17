
/**
 * Module dependencies.
 */

var express = require('express')
  , passport = require('passport')
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals');

var app = express();
app.engine('ejs', engine)

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs-locals'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
require('./models/bdd')(app);
/* ROUTES */
// générales
require('./routes/routes')(app);
// du jeu
require('./routes/jeu/univers')(app);
require('./routes/jeu/empire')(app);
require('./routes/jeu/combat_tt_de_suite')(app);
// du maitre de jeu
require('./routes/maitre/maitre')(app);
require('./routes/maitre/zones')(app);
require('./routes/maitre/unites')(app);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
