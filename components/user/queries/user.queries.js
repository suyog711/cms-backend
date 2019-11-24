const UserModel = require('./../model/user.model');
const mapUser = require('./../helpers/mapUser');

function register(userDetails) {
    return new Promise(function (resolve, reject) {
        var newUser = new UserModel({});
        mapUser(newUser, userDetails);
        newUser.save(function (err, done) {
            if (err) {
                reject(err);
            } else {
                resolve(done);
            }
        });
    });
}

module.exports = {
    register
}