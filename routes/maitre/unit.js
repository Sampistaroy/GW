var passport = require('passport')
  , Unit = require('../../models/unit');

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

/*
 * GET Aide.
 */
	app.get('/maitre-aide', ensureAuthenticated, function (req, res){
		res.render('maitre/aide', {
			user : req.user,
			title : 'Mais biensur que vous le savez déjà Maitre'
		});
	});

/*
 * GET New unit.
 */
	app.get('/maitre-unit-new', ensureAuthenticated, function (req, res){
      Unit.find({}, function (err, docs) {
        res.render('unit/new', {
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
	  var unit = new Unit();
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
      Unit.find({}, function (err, docs) {
        res.render('unit/show', {
          docs: docs,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }