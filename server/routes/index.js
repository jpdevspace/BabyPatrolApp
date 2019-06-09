const express = require('express');

const router = express.Router();

// Controllers
const babyEvents = require('../controllers/babyEvents');

router.post('/event', babyEvents.create);

module.exports = router;