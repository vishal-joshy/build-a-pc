const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const mongoose = require('mongoose');

//Model imports
const Build = require('./Models/build');
const Processor = require('./Models/processor');
const Graphics = require('./Models/graphics');
const Mobo = require('./Models/mobo');
const Ram = require('./Models/ram');

//route imports
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//db connection
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xv49z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('DB connected');
	})
	.catch((err) => {
		console.log(err);
	});

//routes

app.use('/', indexRouter);
app.get('/addTestData', (req, res, next) => {
	console.log('Add test db data');
	const newBuild = new Build({
		name: 'Test Build2',
	});
	const newProcessor = new Processor({
		name: 'test Chip2',
		price: 500,
	});
	newProcessor.save();
	const newGraphics = new Graphics({
		name: 'test MEM2',
		price: 300,
	});
	newGraphics.save();
	const newRam = new Ram({
		name: 'test RAM2',
		price: 500,
	});
	newRam.save();
	const newMobo = new Mobo({
		name: 'test MOBO2',
		price: 500,
	});
	newMobo.save();
	newBuild.components = {
		processor: newProcessor._id,
		graphics: newGraphics._id,
		ram: newRam._id,
		mobo: newMobo._id,
	};

	newBuild
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
