const express = require('express');

const router = express.Router();

// Controllers
const babyEvents = require('../controllers/babyEvents');

// Routes
router.post('/event', babyEvents.create);
router.get('/lastEvent/:type', babyEvents.getLast);

module.exports = router;