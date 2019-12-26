const express = require("express");

const router = express.Router();

//Importing orm model
const employees = require("../models/employees.js");

// Create all routes for iteracting SQL database
router.get("/", function(req, res) {
    res.render("index");
})
module.exports = router;