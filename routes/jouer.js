var passport = require('passport');

module.exports = function (app){


/*
 * GET home page.
 */
	app.get('/jouer', ensureAuthenticated, function (req, res){
		res.render('jouer', {
			user : req.user,
			title : 'Choississez votre univers pour jouer'
		});
	});


};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }