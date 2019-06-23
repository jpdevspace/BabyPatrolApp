const BabyEvents = require('../models/babyEvents');

exports.create = (req, res) => {
    console.log("Receiving... >>>", req.body);
    const newBabyEvent = new BabyEvents(req.body.type);
    newBabyEvent.save()

    res.status(200).json({ laRespuesta: "we gooood" })
};