const express = require("express");
const router = express.Router();

//Importing orm model
const employee = require("../models/employees.js");

// Create all routes for iteracting SQL database
router.get("/", function(req, res) {
    employees.readAll(function(data) {
        let dataObject = {
            employees: data
        };
    })
    console.log(dataObject);
    res.render("index", dataObject);
})


module.exports = router;