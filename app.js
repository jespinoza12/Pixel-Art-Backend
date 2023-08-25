const express = require('express');
const session = require('express-session');
const app = express();
require('dotenv').config();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// Import routes from index.js
const routes = require('./routes/index');

// Use the imported routes
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
