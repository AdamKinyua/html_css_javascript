
/*
Picks a random name from a list to decide who pays the bill
*/
var friends = ["Angela", "Jenny", "Yu", " Michael", "Ben", "Chloe"];

function whoIsPaying(names) {
    var friend = friends[Math.floor(Math.random()*friends.length)];
    return friend + " will pay!"

}

whoIsPaying(friends);
