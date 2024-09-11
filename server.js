const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;



// Middleware to serve static files from 'webapp' directory
app.use(express.static(path.join(__dirname, 'webapp')));

// API endpoint example
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// Serve the UI5 application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webapp', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
