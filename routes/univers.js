var passport = require('passport');

module.exports = function (app){


/*
 * GET home page.
 */
	app.get('/univers-general', ensureAuthenticated, function (req, res){
		res.render('univers/index', {
			user : req.user,
			title : 'Bienvenu, HO! Empereur'
		});
	});

/*
 * GET home page.
 */
	app.get('/combattez-tout-de-suite', ensureAuthenticated, function (req, res){
		res.render('combattez/index', {
			user : req.user,
			title : 'A l\'Attaque'
		});
	});

/*
 * GET home page.
 */
	app.get('/combattez-tout-de-suite-grille', ensureAuthenticated, function (req, res){
		res.render('tout/grille', {
			user : req.user,
			title : 'Grille'
		});
	});


/*
 * GET home page.
 */
	app.get('/combattez-tout-de-suite-assaut', ensureAuthenticated, function (req, res){
		res.render('tout/assaut', {
			user : req.user,
			title : 'Assaut'
		});
	});

/*
 * GET home page.
 */
	app.get('/combattez-tout-de-suite-donjon', ensureAuthenticated, function (req, res){
		res.render('tout/donjon', {
			user : req.user,
			title : 'Donjon'
		});
	});



};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }