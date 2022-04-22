const mongoose = require('mongoose');

async function connectMongoDB() {
    try {
        mongoose.connect('mongodb://localhost:27017/QR_HIT');
        console.log('Connect to MongoDB successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB!');
    }
}

module.exports = { connectMongoDB };
