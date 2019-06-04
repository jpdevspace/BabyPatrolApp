const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const configDB = require('./config/configDB');

const app = express();
const port = 4000;

// Allow cross-origin requests CORS
app.use(cors());

// Mongoose setup
mongoose.connect(`mongodb+srv://${configDB.usr}:${configDB.pwd}@babypatrolcluster-uel9p.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => console.log("Connected to DB!"));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`))