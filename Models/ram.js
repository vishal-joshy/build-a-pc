const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ramSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
});

const Ram = mongoose.model('Ram', ramSchema);
module.exports = Ram;
