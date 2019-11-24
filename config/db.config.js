const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.localDbUrl, function (err, done) {
    if (err) {
        console.log('mongo Db connection failed >>', err);
    } else {
        console.log('db connection successful');
    }

})

