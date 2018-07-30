const express = require('express');
const router = express.Router();
const festivalRouter = require('./api/festival');

router.use('/festivals', festivalRouter);

//Middleware called after the route has been resolved and the object with all the info populated
router.use('*',(req,res) => {  
    const queryObject = req.app.get('search_query');
    res.json({...queryObject, method: req.method});
});

module.exports = router;