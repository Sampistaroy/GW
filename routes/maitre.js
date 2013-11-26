var passport = require('passport');

module.exports = function (app){


/*
 * GET home page.
 */
	app.get('/maitre-de-jeu', ensureAuthenticated, function (req, res){
		res.render('maitre/index', {
			user : req.user,
			title : 'Bienvenu Maitre Du Jeu'
		});
	});



};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }