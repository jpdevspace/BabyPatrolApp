const BabyEvents = require('../models/babyEvents');

exports.create = (req, res) => {
    const newBabyEvent = new BabyEvents(req.body.type);

    newBabyEvent.save()
        .then(dbRes => res.status(200))
        .catch(err => res.status(500))
};

exports.getLast = (req, res) => {
    BabyEvents.getLast(req.params.type)
        .then(lastEvent => res.status(200).json({ lastEvent }))
        .catch(err => console.error("Error retrieving last doc >>>", err));
}