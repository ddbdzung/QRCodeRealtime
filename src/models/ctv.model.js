const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Ctv = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        identityNumber: { type: String, minLength: 10, maxLength: 10, required: true, unique: true },
        className: { type: String, enum: ['CNTT01', 'CNTT02', 'CNTT03', 'CNTT04', 'CNTT05', 'CNTT06', 'KHMT01', 'KHMT02', 'KTPM01', 'KTPM02', 'KTPM03', 'KTPM04', 'HTTT1', 'HTTT2', 'HTTT3', 'HTTT4'], required: true },
        email: { type: String, required: true },
        review: { type: String, maxLength: 500 },
        score: { type: Number, min: 0, max: 100 },
        status: { type: String, enum: ['Đã phỏng vấn', 'Chưa phỏng vấn', 'Vắng mặt'], default: 'Chưa phỏng vấn' },
        isQualified: { type: Boolean, default: false },
        colorStatus: { type: String, enum: ['green', 'red', 'orange'], default: 'orange' },
    },
    {
        timestamps: true,
    },
);

Ctv.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deleteAt: true,
});

module.exports = mongoose.model('Ctv', Ctv, 'Ctv');
