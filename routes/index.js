const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Completed Builds ' });
});

router.get('/components', function (req, res, next) {
	res.render('componentView/components', { title: 'component Page' });
});

module.exports = router;
