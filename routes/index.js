var express = require('express');
var router = express.Router();

//Home router
router.get('/', function(req, res, next){
	res.render('index', {page:'Home', menuId:'home'});
});

module.exports = router;