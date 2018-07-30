const express = require('express');
const router = express.Router();
const lineupRouter = require('./lineup');

router.use('/lineup',lineupRouter);
router.use('/:id/lineup',lineupRouter);

//festival routes
router.all('/',function(req,res,next){
    req.app.set('search_query',{...req.app.get('search_query'),show_all_info: true});
    next();
});

router.all('/:id',function(req,res,next){
    req.app.set('search_query',{...req.app.get('search_query'),festival_id: req.params.id ? req.params.id : '',show_all_info: true});
    next();
});

module.exports = router;

