const UserModel = require('./../model/user.model');
const mapUser = require('./../helpers/mapUser');

function save(userDetails) {
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

function findOne(condition) {
    return new Promise(function (resolve, reject) {
        UserModel.findOne(condition)
            .exec(function (err, done) {
                if (err) {
                    reject(err);
                } else {
                    resolve(done);
                }
            });
    });
}

module.exports = {
    save,
    findOne
}