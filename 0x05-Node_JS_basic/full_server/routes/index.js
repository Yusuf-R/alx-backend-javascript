// 8.4 Write the routes
const express = require('express');

const AppController = require('../controllers/AppController');

const StudentsController = require('../controllers/StudentsController');

// router are used to separate the routes from the main server file
const router = express.Router();

// this will take a call back function for which it's
router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
