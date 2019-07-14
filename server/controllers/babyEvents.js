const BabyEvents = require('../models/babyEvents');

exports.create = (req, res) => {
    const newBabyEvent = new BabyEvents(req.body.type);

    newBabyEvent.save()
        .then(dbRes => res.status(201).json({ dbRes: 'New baby event created' }))
        .catch(err => res.status(500).json(
            { 
                dbRes: 'Error: Could not create new baby event',
                error: err
            }
        ))
};

exports.getLast = (req, res) => {
    BabyEvents.getLast(req.params.type)
        .then(lastEvent => res.status(200).json({ dbRes: lastEvent }))
        .catch(err => res.status(500).json(
            { 
                dbRes: 'Error: Could not get last baby event',
                error: err
            }
        ));
};

exports.getEvents = (req, res) => {
    const { range } = req.params;

    if (range === '5') {
        // get last five days of records
        BabyEvents.getLastFiveDays()
            .then(records => res.status(200).json({ dbRes: records }))
            .catch(err => res.status(500).json(
                { 
                    dbRes: 'Error: Could not get last 5 baby event',
                    error: err
                }
            ));
    } else if (range === 'all') {
        // get all docs
        BabyEvents.getAll()
            .then(records => res.status(200).json({ dbRes: records }))
            .catch(err => res.status(500).json(
                { 
                    dbRes: 'Error: Could not get all baby events',
                    error: err
                }
            ));
    }
}