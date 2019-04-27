const path = require('path');
const applicationArr = require(path.join(__dirname, '../data/Applications.js'));
console.log('api route connected')
const bodyParser   =    require('body-parser');


//console.log(friendsArr);



function apiRouteExport(app) {

    app.use(bodyParser.urlencoded({
        extended: false
    }));
//    * This will be used to display a JSON of all possible friends.
    app.get("/api/applications", function (req, res) {
        return res.json(applicationArr);
        console.log("get");
    });



//    * A POST routes`/api/friends`.
//    * This will be used to handle incoming survey results.
//    * This route will also be used to handle the compatibility logic.  
    app.post("/api/applications.js", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
        applicationArr.push(req.body);
        res.json(applicationArr);
        var userInput = req.body;

        parseInt(userInput.scores);
        
        var ourScores = applicationArr[applicationArr.length - 1].scores;

        function findFriend() {
            var friendFound ;
            var matchArr = [];
            for (var i = 0; i < applicationArr.length -1; i ++) {
                
                    // Initialize our difference value.
                    var totalDiff = 0;

                    // Grab the scores of this particular friend.
                    var friendScores = applicationArr[i].scores;

                    // Determine totalDifference for this friend.
                    for (var t = 0; t < friendScores.length; t++) {
                        var ourScore = parseInt(ourScores[t]);
                        var friendScore = parseInt(friendScores[t]);
                        var diff = Math.abs(ourScore - friendScore);
                        totalDiff += diff;
                        
                    }
                   matchArr[i] = totalDiff;
                console.log(totalDiff)
                console.log(matchArr[i])

                if (matchArr[i] < matchArr[i -1]) {
                    friendFound = applicationArr[i];
                    
                }
            }
            console.log(friendFound.name + "///////")
            return {
                "name": friendFound.name,
                "photo": friendFound.photo
            };
        }
        findFriend();
    });
}


module.exports = apiRouteExport;