const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const configDB = require('./config/configDB');

const app = express();
const port = process.env.PORT || 4000;

// Allow cross-origin requests CORS
app.use(cors());

// Mongoose setup
mongoose.connect(`mongodb+srv://${configDB.usr}:${configDB.pwd}@babypatrolcluster-uel9p.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => console.log("Connected to DB!"));

// Serving the React app
// Static Folders
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/react', (req, res) => res.send({ wowMessage: 'Hello React World!' }));

app.listen(port, () => console.log(`BTW __dirname ${__dirname} Express app listening on port ${port}!`))