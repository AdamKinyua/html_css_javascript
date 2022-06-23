function isLeap(year) {
    var message = ""
    if (year%4 === 0 || year%100 === 0 && year%400 === 0) {
        message = "Is Leap"
    } else {
        message = "Is not Leap"
    }
    return message
}

isLeap(2013)
