const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buildSchema = new Schema({
	name: { type: String, required: true },
	components: {
		processor: { type: Schema.Types.ObjectId },
		graphics: { type: Schema.Types.ObjectId },
		ram: { type: Schema.Types.ObjectId },
		mobo: { type: Schema.Types.ObjectId },
	},
	price: { type: Number, required: true },
});

const Build = mongoose.model('Build', buildSchema);

module.exports = Build;
