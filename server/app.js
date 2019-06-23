const cors = require('cors');
const express = require('express');
//const mongoose = require('mongoose');
const mongoConnect = require('./utils/db').mongoConnect;
const path = require('path');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

// Allow cross-origin requests CORS
app.use(cors());

// Mongoose setup
// mongoose.connect(`mongodb+srv://${configDB.usr}:${configDB.pwd}@babypatrolcluster-uel9p.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection Error:'));
// db.once('open', () => console.log("Connected to DB!"));

// Routes
app.use('/', routes);

// Serving the React app
// Static Folders
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/react', (req, res) => res.send({ wowMessage: 'Hello React World!' }));

mongoConnect(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
  
