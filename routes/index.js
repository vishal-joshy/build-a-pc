const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const buildController = require('../controller/buildController');

const Build = require('../Models/build');
const Processor = require('../Models/processor');
const Graphics = require('../Models/graphics');
const Mobo = require('../Models/mobo');
const Ram = require('../Models/ram');

/* GET home page. */
router.get('/', buildController.build_get);


module.exports = router;
