const path = require("path");
const exphbs = require("express-handlebars");
const router = require("express").Router();

applicationCache.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

router.get("/", function(req, res) {
    connection.query("SELECT * FROM employees", function (err, data) {
        if (err) {
            res.status(500).end();
            return console.log("Ther was trouble connecting to the server");
        }
        res.render("index", {employees: data})
    });
});

router.get("*", function(req,res){
    connection.query("SELECT * FROM employees", function (err, data) {
        if (err) {
            res.status(500).end();
            return console.log("Ther was trouble connecting to the server");
        }
        res.render("index", {employees: data})
    })
})


module.exports = router;