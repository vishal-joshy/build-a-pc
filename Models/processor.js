const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const processorSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
});

const Processor = mongoose.model('Processor', processorSchema);
module.exports = Processor;
