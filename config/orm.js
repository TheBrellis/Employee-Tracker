const connection = require("../config/connection.js");

const orm = {
    readAll: function (input, cb) {
        let queryString = `SELECT
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
        ON (employees.manager_id = managers.id)`;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;