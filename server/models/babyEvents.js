const { getDb } = require('../utils/db');
const { subDays } = require('date-fns');

class BabyEvents {
    constructor(type) {
        this.type = type;
        this.date = new Date();
    }

    save() {
        const db = getDb();
        return db.collection('babyEvents').insertOne(this)
            .then(res => '200')
            .catch(err => {
                console.error("Error creating doc in db >>>", err);
                throw 'Error';
            });
    }

    static getAll() {
        const db = getDb();
        return db.collection('babyEvents').find({})
            .then(res => res)
            .catch(err => {
                console.error("Error retrieving all docs from DB >>>", err);
                throw 'Error';
            });
    }

    static getLast(type) {
        const db = getDb();
        return db.collection('babyEvents')
            .find({ type })
            .sort({ _id: -1 }) // ids have timestamp embedded
            .next()
            .then(res => res)
            .catch(err => err)
    }

    static getLastFiveDays() {
        const db = getDb();
        const fiveDaysAgo = subDays(new Date(), 5);

        return db.collection('babyEvents')
            .find({ 
                date: {
                    $gte: fiveDaysAgo
                }
            })
            .sort({ _id: -1 }) // ids have timestamp embedded
            .toArray()
            .then(res => res)
            .catch(err => err)
    }
}; 

module.exports = BabyEvents;