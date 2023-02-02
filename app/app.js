const fs = require('fs');
const express = require('express');

// Creates exoress app
const app = express();
const port = 8000;

// gives access to the res.body
app.use(express.json());

// Import routes
const tourRoutes = require('./routes/tour');
app.use('/api/v1', tourRoutes);

app.listen(port, () => console.log(`Listening to app on port: ${port}...`));
