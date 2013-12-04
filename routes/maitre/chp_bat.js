var User = require('../../models/user')
  , Chp_bat = require('../../models/chp_bat')
  , Grille = require('../../models/grille');

module.exports = function (app){


/*
 * GET home page.
 */
	app.get('/grille-tout-de-suite', ensureAuthenticated, function (req, res){
		res.render('chp_bat/chp_bat', {
			user : req.user,
			title : 'grille de combat'
		});
	});



/*
 * GET New chp_bat.
 */
  app.get('/chp_bat_new', ensureAuthenticated, function (req, res){
      Grille.find({}, function (err, docs) {
        res.render('chp_bat/new', {
          docs: docs,
      user : req.user,
      title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


/*
 * POST New chp_bat.
 */
  app.post('/maitre-chp_bat-new', ensureAuthenticated, function (req, res){
    var chp_bat = new Chp_bat();
    chp_bat.name = req.body.name;
    chp_bat.avatar = req.body.avatar;
    chp_bat.description = req.body.description;
    chp_bat.grille.push(req.body.grille);
    chp_bat.created_at = new Date();
    chp_bat.save(function (err) {
      if (!err) {
        res.redirect('/chp_bat-show');
        console.log(req.body);
      }
      else {
        res.redirect('/chp_bat-new');
      }
    });
    });



};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }