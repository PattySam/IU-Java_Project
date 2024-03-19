const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Simulated in-memory data
let newsletterSubscribers = [];
let donations = [];

app.use(express.static('public'));
app.use(bodyParser.json()); // Parse JSON in request body

// ... Existing code for serving static files and API endpoints ...

// API endpoint to subscribe to the newsletter
app.post('/api/newsletter', (req, res) => {
    const email = req.body.email;

    if (email) {
        newsletterSubscribers.push(email);
        res.json({ success: true, message: 'Successfully subscribed to the newsletter.' });
    } else {
        res.status(400).json({ error: 'Invalid request. Email is required.' });
    }
});

// API endpoint to donate
app.post('/api/donate', (req, res) => {
    const amount = req.body.amount;

    if (amount) {
        donations.push({ amount, timestamp: new Date() });
        res.json({ success: true, message: 'Donation successful. Thank you for your support!' });
    } else {
        res.status(400).json({ error: 'Invalid request. Amount is required.' });
    }
});

// ... Continue with other API endpoints as needed ...

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
