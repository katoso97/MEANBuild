import * as express from 'express';
import * as bcrypt from 'bcryptjs';
import User from '../models/user';
import * as jwt from 'jwt-simple';
import * as moment from 'moment';
let config = require('../../../config');

let router = express.Router();

// get all Users
router.get('/', (req, res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get user by ID
router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id}).then((user) => {
    res.json(user);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//login
//Create JWT
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(2, 'hours').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

router.post('/login', function(req, res) {
  console.log("started");
  User.findOne({ email: req.body.email }, {password: req.body.password}, function(err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Tweedledee' });
    }
    console.log(user);
    res.send({ token: createJWT(user), user: user });
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash;
      });
    });
    // user.comparePassword(req.body.password, function(err, isMatch) {
    //   if (!isMatch) {
    //     return res.status(401).send({ message: 'Eat a fat one' });
    //   }
    //   console.log("finished");
    //   res.send({ token: createJWT(user), user: user });
    // });
  });
});

// add user
router.post('/', (req, res) => {
  let user = new User();
  user.dateCreated = new Date();
  user.fullName = req.body.fullName;
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  user.projects = [];
  user.profilePicture = req.body.profilePicture;
  user.githubURL = req.body.githubURL;
  user.bitbucketURL = req.body.bitbucketURL;
  user.linkedinURL = req.body.linkedinURL;
  user.save().then((user) => {
    res.json(user)
  }).catch((err) => {
    res.json(err);
  });
});

//edit User
router.put('/:id', (req, res) => {
  User.findOne({_id: req.params.id})
    .then((user) => {
      console.dir(user);
      user.fullName = req.body.fullName;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.projects = req.body.projects;
      user.profilePicture = req.body.profilePicture;
      user.githubURL = req.body.githubURL;
      user.bitbucketURL = req.body.bitbucketURL;
      user.linkedinURL = req.body.linkedinURL;
      console.dir(user);
      user.save()
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

// delete user by ID
router.delete('/:id', (req, res) => {
  let userId = req.params['id'];
  User.remove({_id: userId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

export default router;
