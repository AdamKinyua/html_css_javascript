/*
This program checks whether a guest is in the list of the guests to be admitted
If yes, admitted
The opposite is true
*/

function toAdmit(guest) {
    var guestList = ["pen", "book", "excerise", "bicycle"];
    if (guestList.includes(guest)) {
        alert("Admitted");
    } else {
        alert("Not Admitted");
    }
}

toAdmit("mike")
