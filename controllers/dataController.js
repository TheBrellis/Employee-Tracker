const express = require("express");
const router = express.Router();

//Importing orm model
const employee = require("../models/employees.js");

// Create all routes for iteracting with SQL database
router.get("/", function (req, res) {
    res.render("index")
});

router.get("/api/all", function (req, res) {
    employee.read("all",null,function (data) {
        let dataObject = {
            employees: data
        };
        res.render("index", dataObject)
    });
});

router.get("/api/:query/:criteria", function (req, res) {
    const query = req.params.query;
    const criteria = req.params.criteria;
    if (query === "departments") {
        employee.read(query,criteria, function (data) {
            let dataObject = {
                employees: data
            };
            res.render("index",dataObject)
        })
    };
});

module.exports = router;