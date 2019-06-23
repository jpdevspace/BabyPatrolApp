const MongoClient = require('mongodb').MongoClient;
const configDB = require('../config/configDB');

let _db;

const mongoConnect = (callback) => {
    // MongoDB
    const url = `mongodb+srv://${configDB.usr}:${configDB.pwd}@babypatrolcluster-uel9p.mongodb.net/babyPatrolDB?retryWrites=true&w=majority`;
    const client = MongoClient(url, { useNewUrlParser: true });
    
    client.connect(err => {
        if (err) {
            console.error("Error connecting to MongoDB >>>", err);
            throw err;
        }
        
        console.log("Connected successfully to the MongoDB server");
        _db = client.db(); // The connection to the db
        callback(client);

    });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    
    throw Error("No Database Found!");
}

module.exports = {
    getDb,
    mongoConnect
}