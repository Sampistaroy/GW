var passport = require('passport')
  , Unites = require('../../models/unites')
  , Zones = require('../../models/zones');

module.exports = function (app){


/*
 * GET Aide.
 */
	app.get('/maitre-aide', function (req, res){
		res.render('maitre/aide', {
			user : req.user,
			title : 'Mais biensur que vous le savez déjà Maitre'
		});
	});

/*
 * GET New grille.
 */
	app.get('/maitre-grille-new', function (req, res){
      Unites.find({}, function (err, docs) {
        res.render('grille/new', {
          docs: docs,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


/*
 * POST New grille.
 */
	app.post('/maitre-grille-new', function (req, res){
	  var grille = new Zones();
	  grille.name = req.body.name;
	  grille.avatar = req.body.avatar;
	  grille.description = req.body.description;
	  grille.size.x = req.body.sizex;
	  grille.size.y = req.body.sizey;
	  grille.created_at = new Date();
	  grille.save(function (err) {
	    if (!err) {
	      res.redirect('/maitre-grille-new');
	      console.log(req.body);
	    }
	    else {
	      res.redirect('/maitre-grille-new');
	    }
	  });
    });



/*
 * GET show grille.
 */
	app.get('/maitre-grille-show', ensureAuthenticated, function (req, res){
      Zones.find({}, function (err, docs) {
        res.render('grille/show', {
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