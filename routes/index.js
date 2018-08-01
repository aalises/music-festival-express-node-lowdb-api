const express = require('express');
const router = express.Router();
const festivalRouter = require('./api/festival');

const Database = require('../db/database');
const dbInstance = new Database();

router.use('/festivals', festivalRouter);

//Middleware called after the route has been resolved and the object with all the info populated
router.use('*',(req,res) => {  
    const queryObject = req.app.get('search_query');
    switch(req.method){
        case 'PUT':
            if(!queryObject.festival_id) res.json({success: 0, error: "Cannot write: Festival name is mandatory" });
            else dbInstance.write(queryObject).then(() => {
                res.json({success: 1, message: "The entry has been succesfully added to the database" });
            }).catch(err => {  
                res.json({success: 0, message: err });
            });
        break;
    }
});

module.exports = router;