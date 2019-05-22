"use strict";

module.exports = function(app) {

    // Hello world
    app.route('/').get(function(req, res) {
        res.json({ "message" : "Hello world!" });
    });

    // Health check
    app.route('/health').get(function(req, res) {
        res.json({ "status" : "UP" });
    });

    // Environment variables
    app.route('/environment').get(function(req, res) {
        res.json({ "status" : "TODO" });
    });

};