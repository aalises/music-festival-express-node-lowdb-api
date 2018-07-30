const express = require('express');
const app = express();     
const port = process.env.PORT || 8080;   

const indexRouter = require('./routes/index');

//Object containing all the params extracted by the request to send to Firebase
const search_query = {
    show_all_info: false, //Show all the festival info not just the lineup
    festival_id: '',
    stage: '',
    day: ''
}

app.use((req,res,next) => {
    req.app.set('search_query',search_query); 
    next();
});

app.use('/festapi', indexRouter); 
app.listen(port);
console.log('The server is listening on port:' + port);