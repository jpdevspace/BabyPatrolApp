const express = require('express');

const router = express.Router();

// Controllers
const babyEvents = require('../controllers/babyEvents');

// Routes
router.post('/event', babyEvents.create);
router.get('/event/last/:type', babyEvents.getLast);
router.get('/events/:range', babyEvents.getEvents);

module.exports = router;