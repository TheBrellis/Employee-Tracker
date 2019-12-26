const express = require('express');
const exphbs = require("express-handlebars");
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;
// handlebars middle-ware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// express middle-ware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const routes = require('./controllers/dataController.js');

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));