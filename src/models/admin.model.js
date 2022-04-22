const mongoose = require('mongoose');

const Admin = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        userLogin: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['manager', 'scanner'], required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Admin', Admin, 'Admin');
