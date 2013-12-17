var passport = require('passport')
  , Unites = require('../../models/unites');

module.exports = function (app){


/*
 * GET New unit.
 */
	app.get('/maitre-unit-new', ensureAuthenticated, function (req, res){
      Unites.find({}, function (err, docs) {
        res.render('unites/new', {
          docs: docs,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


/*
 * POST New unit.
 */
	app.post('/maitre-unit-new', ensureAuthenticated, function (req, res){
	  var unit = new Unites();
	  unit.name = req.body.name;
	  unit.avatar = req.body.avatar;
	  unit.description = req.body.description;
	  unit.created_at = new Date();
	  unit.save(function (err) {
	    if (!err) {
	      res.redirect('/maitre-unit-new');
	      console.log(req.body);
	    }
	    else {
	      res.redirect('/maitre-unit-new');
	    }
	  });
    });



/*
 * GET show unit.
 */
	app.get('/maitre-unit-show', ensureAuthenticated, function (req, res){
      Unites.find({}, function (err, unites) {
        res.render('unites/show', {
          unites: unites,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });

/*
 * GET edit unit.
 */


/*
 * GET delete unit.
 */

};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }