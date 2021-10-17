const Build = require('../Models/build');
const Processor = require('../Models/processor');
const Graphics = require('../Models/graphics');
const Mobo = require('../Models/mobo');
const Ram = require('../Models/ram');

const build_get = async function (req, res, next) {
	const [buildCount, processorCount, graphicsCount, moboCount, ramCount] = await Promise.all([
		Build.countDocuments(),
		Processor.countDocuments(),
		Graphics.countDocuments(),
		Mobo.countDocuments(),
		Ram.countDocuments(),
	]);
	res.json({
		buildCount,
		processorCount,
		graphicsCount,
		ramCount,
		moboCount,
	});
};

module.exports = { build_get };
