// var n = Math.floor(Math.random()*6);
// console.log(n);
// Love is a random process; therefore, this function ignores the user inputs and just generates a random number
/*
===
!==
>
<
>=
<=
||
&&
*/
var name1 = prompt("What is your name: ");
var name2 = prompt("What is crash's name: ");

function loveCalculator() {
    var match = Math.floor(Math.random()*100) + 1;
        if (match >= 75 ) {
            alert("Your match is " + match);
            alert("You are a match");
        }else if (match >= 45 && match <= 75) {
            alert("Your match is " + match);
            alert("Partial match, you share a lot in common");
        } else if (match <= 45 && match >= 15) {
            alert("Your match is " + match);
            alert("I don't wanna lie to you");
        } else {
            alert("Your match is " + match);
            alert("It is what is is");
        }
}

loveCalculator()
