// route files essentially act like controllers
const router = require('express').Router(); // need to require this module from express to allow this file to act as a router
let Exercise = require('../models/exercise.model'); // requires the mongoose model that we created in the "models" folder

// CRUD system

// index
router.route('/').get((request, response) => {
    Exercise.find() // returns a promise
        .then(exercises => response.json(exercises))
        .catch(error => response.status(400).json('Error: ' + err)); // tells the router what to do for this exercise route and method
});

// create
router.route('/add').post(( request, response ) => {
    const username = request.body.username;
    const description = request.body.description;
    const duration = Number(request.body.duration);
    const date = Date.parse(request.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => response.json('Exercise added!'))
        .catch(error => response.status(400).json('Error: ' + err));
});


// show
router.route('/:id').get((request, response) => {
    Exercise.findById(request.params.id)
        .then(exercise => response.json(exercise))
        .catch(error => response.status(400).json('Error: ' + err));
});

// delete
router.route('/:id').get((request, response) => {
    Exercise.findByIdAndDelete(request.params.id)
        .then(() => response.json('Exercise deleted.'))
        .catch(error => response.status(400).json('Error: ' + err));
});

// update
router.route('/update/:id').post((request, response) => {
    Exercise.findById(request.params.id)
        .then(exercise => {
            exercise.username = request.body.username;
            exercise.description = request.body.description;
            exercise.duration = Number(request.body.duration);
            exercise.date = Date.parse(request.body.date);

            exercise.save()
                .then(() => response.json('Exercise updated!'))
                .catch(error => response.status(400).json('Error: ' + err));
        })
        .catch(error => response.status(400).json('Error: ' + err));
});

module.exports = router; //exports the router to allow other files to access it