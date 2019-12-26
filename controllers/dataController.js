const express = require("express");
const router = express.Router();

//Importing orm model
const employee = require("../models/employees.js");

// Create all routes for iteracting SQL database
router.get("*", function(req, res) {
    res.render("index");
    });
/*
employee.readAll(function(data) {
    let dataObject = {
        employees: data
    };
    */
module.exports = router;