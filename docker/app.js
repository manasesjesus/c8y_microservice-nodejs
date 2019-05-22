"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 80;

// Server listening on port 80
app.use(express.json());
app.listen(port);
console.log("server started on port " + port);


/**** Application endpoints ****/

// Hello world
app.route('/').get(function(req, res) {
    res.json({ "message" : "Hello world!" });
});

// Health check
app.route('/health').get(function(req, res) {
    res.json({ "status" : "UP" });
});
