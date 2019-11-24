const express = require('express');
const config = require('./config/config');



const app = express();

app.listen(config.port, function (err, done) {
    if (err) {
        console.log('Error in establishing server');
    } else {
        console.log('server listening at port>>', config.port);
        console.log('Press Ctrl + C to exit');
    }
});
