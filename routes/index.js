const express = require('express');
const router = express.Router();
const festivalRouter = require('./api/festival');

const Database = require('../db/database');
const dbInstance = new Database();

router.use('/festivals', festivalRouter);

//Middleware called after the route has been resolved and the object with all the info populated
router.use('*',(req,res) => {  
    const queryObject = req.app.get('search_query');
    res.json({...queryObject, method: req.method});
    switch(req.method){
        case 'PUT':
            if(!queryObject.festival_id) console.log("Cannot write: Festival name is mandatory")
            else dbInstance.write(queryObject);
        break;
    }
});

module.exports = router;