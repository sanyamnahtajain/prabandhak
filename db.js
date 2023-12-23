// db.js
const mongoose = require('mongoose');

// DB_CONNECTION=mongodb+srv://wishtok:EubWZhQRDJ7LeAk7@cluster0.btf5r8x.mongodb.net/dev

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
