// API ROUTES 
var friendsArray = require("../data/friends");

// Routing 
module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    // API POST Requests 
    app.post("/api/friends", function (req, res) {
        var userInput = req.body;

        // Intial comparison 
        var lowestDifference = 4444;

        // Index with the lowest, closest difference 

        var lowestIndex = 0;
        // loop through friendsArray 
        for (var i = 0; i < friendsArray.length; i++) {
            var tempDifference = 0;

            // loop through the user's score
            for (let j = 0; j < userInput.scores.length; j++) {
                tempDifference += Math.abs(userInput.scores[j] - friendsArray[i].scores[j])
            }


            // if this userscore difference is lower than the current lowest, 
            // assign the index of the friend and reassign the lowest difference.
            if (tempDifference < lowestDifference) {
                lowestIndex = i;
                lowestDifference = tempDifference;
            }

        }


        // Add the new user to the friends object
        friendsArray.push(userInput);
        // Send the matching user back to our form.
        res.json(friendsArray[lowestIndex]);

    });
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsArray.length = 0;

        res.json({ ok: true });
    });

};






