const express = require('express');
const router = express.Router({mergeParams: true});

router.use((req,res,next) => {
    req.app.set('search_query',{...req.app.get('search_query'), band: req.params.band});
    next();
});

module.exports = router;