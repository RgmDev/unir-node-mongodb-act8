const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comensalSchema = new Schema({
    flat: Number,
    letter: String,
    extension: Number,
    rooms: Number,
    rent: Boolean,
    owner_name: String,
    owner_email: String
});

module.exports = mongoose.model('estate', estateSchema, 'estates');