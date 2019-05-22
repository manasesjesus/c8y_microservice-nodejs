"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 80;

// Application endpoints
var routes = require('./routes');
routes(app); 

// Server listening on port 80
app.use(express.json());
app.listen(port);
console.log("server started on port " + port);

