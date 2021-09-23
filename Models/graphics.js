const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const graphicsSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
});

const Graphics = mongoose.model('Graphics', graphicsSchema);
module.exports = Graphics;
