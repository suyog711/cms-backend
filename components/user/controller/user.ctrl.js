const userQuery = require('./../queries/user.queries');
const passwordHash = require('password-hash');
const config = require('./../../../config/config');
const generateToken = require('./../helpers/generateToken');

function register(req, res, next) {
    userQuery.save(req.body)
        .then(function (data) {
            console.log('successfully created');
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function login(req, res, next) {
    userQuery.findOne({
        username: req.body.username
    })
        .then(function (user) {
            if (user) {
                if (user.verified == false) {
                    return next({
                        message: "User is not verified",
                        status: 400
                    });
                }
                var isMatch = passwordHash.verify(req.body.password, user.password);
                if (isMatch == false) {
                    return next({
                        message: "Invalid login credentials",
                        status: 404
                    });
                }
                var token = generateToken.createToken({
                    id: user._id,
                    name: user.username
                }, config.jwtkey);
                res.json({
                    user: user,
                    token: token
                })
            } else {
                return next({
                    message: "Invalid login credentials",
                    status: 404
                });
            }
        })
        .catch(function (err) {
            return next(err);
        })
}

module.exports = {
    register,
    login
}