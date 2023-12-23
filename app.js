// app.js
const express = require('express');
require('dotenv').config();
const mongoose = require('./db'); // Import MongoDB connection
const authRoutes = require('./routes/authRoutes');



const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/test', (req, res) => {
    res.send('Server is running and up!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
