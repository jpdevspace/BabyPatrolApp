const BabyEvents = require('../models/babyEvents');

exports.create = (req, res) => {
    const newBabyEvent = new BabyEvents(req.body.type);

    newBabyEvent.save()
        .then(dbRes => res.status(200).json({ dbRes: 'New baby event created' }))
        .catch(err => res.status(500))
};

exports.getLast = (req, res) => {
    BabyEvents.getLast(req.params.type)
        .then(lastEvent => res.status(200).json({ dbRes: lastEvent }))
        .catch(err => console.error("Error retrieving docs >>>", err));
};

exports.getEvents = (req, res) => {
    const { range } = req.params;

    if (range === '5') {
        // get last five days of records
        BabyEvents.getLastFiveDays()
            .then(records => console.log("Records >>>", records))
            .catch(err => console.error("Error retrieving docs >>>", err));
    } else if (range === 'all') {
        // get all docs
    }
}