const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()//mongoose method that get all the user
    .then(users => res.json(users))//return the users in json format
    .catch(err => res.status(400).json('Error: ' + err));//if error 
})

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()//saved to the database
    .then(() => res.json('User added successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;