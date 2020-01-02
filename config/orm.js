const connection = require("../config/connection.js");

const orm = {
    read: function (query, criteria, cb) {

        let mainQueryString = `SELECT
        employees.id as id, 
        employees.first_name as first_name, 
        employees.last_name as last_name,
        roles.title as title,
        departments.name as department,
        managers.name as manager,
        salary
        FROM
        employees
        LEFT JOIN
        departments
        ON (employees.department_id = departments.id)
        LEFT JOIN
        roles
        ON (employees.role_id = roles.id)
        LEFT JOIN
        managers
        ON (employees.manager_id = managers.id)`


        if (query === "all") {
            connection.query(mainQueryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            })

        } else {
            connection.query(mainQueryString+` WHERE ??.name = ?`,
                [query, criteria],
                function (err, result) {
                    if (err) {
                        throw err;
                    }
                    cb(result);
                })
        }
    }
}

module.exports = orm;