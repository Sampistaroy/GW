var passport = require('passport');

module.exports = function (app){


/*
 * GET page accueil univers page.
 */
	app.get('/univers-general', ensureAuthenticated, function (req, res){
		res.render('univers/index', {
			user : req.user,
			title : 'Bienvenu, HO! Empereur'
		});
	});
};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }