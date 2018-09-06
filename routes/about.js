var express = require('express');
var router = express.Router();

//Home router
router.get('/', function(req, res, next){
	res.render('about', {page:'About Us', menuId:'about'});
});

module.exports = router;
