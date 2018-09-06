var express = require('express');
var router = express.Router();

//Home router
router.get('/', function(req, res, next){
	res.render('contact', {page:'Contact Us', menuId:'contact'});
});

module.exports = router;
