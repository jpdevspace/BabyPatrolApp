const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/db').mongoConnect;
const path = require('path');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

// Allow cross-origin requests CORS
app.use(cors());

// Body-Parser
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

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

mongoConnect(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
});
  
