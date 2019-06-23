const { getDb } = require('../utils/db');

class BabyEvents {
    constructor(name) {
        this.name = name;
        this.date = new Date();
    }

    save() {
        const db = getDb();
        db.collection('babyEvents').insertOne(this)
        .then(res => console.log("New doc created in db!"))
        .catch(err => console.error("Error creating doc in db >>>", err));
    }
}; 

module.exports = BabyEvents;