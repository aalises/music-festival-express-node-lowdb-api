const express = require('express');
const router = express.Router({mergeParams: true});

const dayRouter = require('./day');
const stageRouter = require('./stage');
const bandRouter = require('./band');

router.use((req,res,next) => {
    req.app.set('search_query',{...req.app.get('search_query'),festival_id: req.params.id ? req.params.id : ''});
    next();
});

router.use('*/stage/:stage',stageRouter);
router.use('*/day/:day',dayRouter);
router.use('*/band/:band',bandRouter);

module.exports = router;

