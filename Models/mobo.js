const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moboSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
});

const Mobo = mongoose.model('Mobo', moboSchema);
module.exports = Mobo;
