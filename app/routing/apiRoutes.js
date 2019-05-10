var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        req.body.scores = req.body.scores.map(x => parseFloat(x));
        var currentUser = req.body.scores;
        var totalDifferenceArr = [];
        var counter = 0;

        while (counter < friendData.length) {
            var totalDifference = 0;
            for (i = 0; i < friendData.length; i++) {
                totalDifference += Math.abs(friendData[counter].scores[i] - currentUser[i]);
            };
            totalDifferenceArr.push(totalDifference);
            counter++;
        };
        var match = friendData[totalDifferenceArr.indexOf(Math.min(...totalDifferenceArr))];

        friendData.push(req.body);
        res.json(match);
    });
};