var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res,next){
  res.render('login',{title:'Expresss'});
});
router.get('/cart',function(req,res,next){
  res.render('cart',{title:'Express'});
});

router.get('/category',function(req,res,next){
  res.render('category',{title:'Express'});
});

router.get('/confirmation',function(req,res,next){
  res.render('confirmation',{title:'Express'});
});

router.get('/checkout',function(req,res,next){
  res.render('checkout',{title:'Express'});
});

router.get('/CreateAccount',function(req,res,next){
  res.render('CreateAccount',{title:'Express'});
});

router.get('/feature',function(req,res,next){
  res.render('feature',{title:'Express'});
});

router.get('/Filter',function(req,res,next){
  res.render('Filter',{title:'Express'});
});



router.get('/KQTimKiem',function(req,res,next){
  res.render('KQTimKiem',{title:'Express'});
});

router.get('/tracking',function(req,res,next){
  res.render('tracking',{title:'Express'});
});

router.get('/contact',function(req,res,next){
  res.render('contact',{title:'Express'});
});


module.exports = router;
