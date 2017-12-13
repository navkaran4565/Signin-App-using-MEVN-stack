var express = require('express');
var app = express();
var userRoutes = express.Router();

// Require User model in our routes module
var User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  var user = new User(req.body);
      user.save()
    .then(user => {
    res.status(200).json({'user': 'User added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// login admin
userRoutes.route('/login').post(function (req, res) {
  console.log(req.body);
  User.findOne({ 'email': req.body.email}, function (err, user){
    
    if(err){
      res.status(400).send("unable to save to database");
    }
    else {      
      res.status(200).send({"user":  user});
    }
  }); 
});

// Use this function for API endpoint protection.
const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
   next()
  }
  else {
    res.redirect('/login')
  }
}
// router.get('/', checkAuth, (req, res) => {
  //   Post.find({}, (err, posts) => {
  //     if (err) throw err
  //     else {
  //       res.json({ posts })
  //     }
  //   })
  // })
// Defined get data(index or listing) route
userRoutes.get('/', (req,res) => {
// userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name = req.body.name;
      user.price = req.body.price;

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = userRoutes;
module.exports.checkAuth = checkAuth