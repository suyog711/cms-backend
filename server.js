const express = require('express');
const config = require('./config/config');
const bodyParser = require('body-parser');

require('./config/db.config')
var apiRoutes = require('./routes/api.routes');

const app = express();
//inbuilt middlewares
app.use(bodyParser.json());


//routinglevel middlewares
app.use('/admin', apiRoutes);

/**
 * Routing for unwanted routes
 */
app.use(function(req, res, next){
    next({
        message: "No Where to go",
        status: 404
    });
});


/**
 * Error handling middlerware
 */
app.use(function (err, req, res, next) {
    res.json({
        message: err.message || err,
        status: err.status || 400
    });
});
/**
 * Create server
 */
app.listen(config.port, function (err, done) {
    if (err) {
        console.log('Error in establishing server');
    } else {
        console.log('server listening at port>>', config.port);
        console.log('Press Ctrl + C to exit');
    }
});
