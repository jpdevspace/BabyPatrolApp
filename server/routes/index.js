const bodyParser = require('body-parser');
const express = require('express');

const router = express.Router();


// Controllers
const babyEvents = require('../controllers/babyEvents');

// Body-Parser
    // Create application/json parser
const jsonParser = bodyParser.json();
    // Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Routes
router.post('/event', jsonParser, babyEvents.create);

module.exports = router;