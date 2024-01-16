const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Add more routes as needed

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
