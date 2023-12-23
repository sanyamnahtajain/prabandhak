const express = require('express');
const app = express();

const PORT = 3000; // Define the port number

app.get('/api/test', (req, res) => {
    res.send('Server is running and up!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
