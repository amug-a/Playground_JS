// THis is a server

// Import all modules
const express = require('express');
const path = require('path');

// Create an Express Application

const app = express();

// Set up a simple rout to serve our HTML page



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});




// Start the server
const PORT = 4200; // process.
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
}); 