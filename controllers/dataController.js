const express = require("express");
const router = express.Router();

//Importing orm model
const employee = require("../models/employees.js");

// Create all routes for iteracting with SQL database
router.get("/", function (req, res) {
    employee.readAll(function (data) {
        let dataObject = {
            employees: data
        };
    res.render("index", dataObject)
    });
    
});

/*
router.get("/api/all", function (req, res) {
        employee.readAll(function (data) {
            let dataObject = {
                employees: data
            };
        });
        res.render("index", dataObject)
});
*/
module.exports = router;