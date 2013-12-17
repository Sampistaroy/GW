

module.exports = function (app){


/*
 * GET home page.
 */
	app.get('/empire', ensureAuthenticated, function (req, res){
		res.render('empire/index', {
			user : req.user,
			title : 'Empire - index'
		});
	});

};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }