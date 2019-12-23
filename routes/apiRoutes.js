const router = require("express").Router();

const connection = require('../db/dbConnection');

router.get("/all", function(req,res) {
    const query = "SELECT * FROM -----"
    connection.query(query, (err, result) => {
        if (err) throw err;
        // This is where the sql calls will go through
    })
});

module.exports = router;