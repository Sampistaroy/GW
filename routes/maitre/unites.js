var passport = require('passport')
  , Unites = require('../../models/unites');

module.exports = function (app){


/*
 * GET New unit.
 */
	app.get('/maitre-unites-new', ensureAuthenticated, function (req, res){
      Unites.find({}, function (err, unites) {
        res.render('unites/new', {
          unites: unites,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


/*
 * POST New unit.
 */
	app.post('/maitre-unites-new', ensureAuthenticated, function (req, res){
	  var unit = new Unites();
	  unit.name = req.body.name;
	  unit.avatar = req.body.avatar;
	  unit.description = req.body.description;
	  unit.created_at = new Date();
	  unit.save(function (err) {
	    if (!err) {
	      res.redirect('/maitre-unites-new');
	      console.log(req.body);
	    }
	    else {
	      res.redirect('/maitre-unites-new');
	    }
	  });
    });



/*
 * GET show unit.
 */

	app.get('/maitre-unites-show/:id', ensureAuthenticated, function (req, res){
      Unites.findById(req.params.id, function (err, unites) {
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

	exports.taskedit = function(req, res){
	  models.Task.findById(req.params.id, function (err, doc){
	    res.render('tasks/edit', { 
	      title: 'My Site', 
	      task: doc 
	    });
	  });
	}

	exports.taskeditput = function(req, res){
	  models.Task.findById(req.params.id, function (err, doc){
	    doc.updated_at = new Date();
	    doc.task = req.body.task;
	    doc.save(function(err) {
	      if (!err){
	        req.flash('info', 'Task udpated');
	        res.redirect('/tasks');
	      }
	      else {
	        // error handling
	      }
	    });
	  });
	}

	app.get('/maitre-unites-show/:id', ensureAuthenticated, function (req, res){
      Unites.findById(req.params.id, function (err, unites) {
        res.render('unites/show', {
          unites: unites,
		  user : req.user,
		  title : ' Que voulez vous créer Maitre Du Jeu'
        });
      });
    });


/*
 * GET delete unit.
 */


	app.del('/maitre-unites-del/:id', ensureAuthenticated, function (req, res){
    	Unites.findOne({ _id: req.params.id }, function (err, unites) {
			if (!unites) return next(new NotFound('unit not found'));
	    	unites.remove(function() {
	      		res.redirect('/maitre-de-jeu');
	    	});
    	});
    });

};

  // simple middleware pour s'assurer qu'il est authentifié
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }