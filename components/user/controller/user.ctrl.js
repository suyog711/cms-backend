const userQuery = require('./../queries/user.queries');

function register(req, res, next) {
    userQuery.register(req.body)
        .then(function (data) {
            console.log('successfully created');
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    register
}