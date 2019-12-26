const orm = require("../config/orm.js");

const employee = {
    readAll: function(cb) {
        orm.readAll(null,function(res) {
            cb(res);
        })
    }
}

module.exports = employee;