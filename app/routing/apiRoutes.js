var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
        console.log("got it");
    });
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
    });
};