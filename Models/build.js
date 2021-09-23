const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buildSchema = new Schema({
	name: { type: String, required: true },
	components: {
		processor: { type: Schema.Types.ObjectId, ref: 'Processor' },
		graphics: { type: Schema.Types.ObjectId, ref: 'Graphics' },
		ram: { type: Schema.Types.ObjectId, ref: 'Ram' },
		mobo: { type: Schema.Types.ObjectId, ref: 'Mobo' },
	},
	price: { type: Number, required: true },
});

const Build = mongoose.model('Build', buildSchema);

module.exports = Build;
