// route files essentially act like controllers
const router = require('express').Router(); // need to require this module from express to allow this file to act as a router
let User = require('../models/user.model'); // requires the mongoose model that we created in the "models" folder

router.route('/').get((request, response) => {
    User.find() // returns a promise
        .then(users => response.json(users))
        .catch(error => response.status(400).json('Error: ' + err)); // tells the router what to do for this user route and method
});

router.route('/add').post(( request, response ) => {
    const username = request.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => response.json('User added!'))
        .catch(error => response.status(400).json('Error: ' + err));
});

module.exports = router; //exports the router to allow other files to access it