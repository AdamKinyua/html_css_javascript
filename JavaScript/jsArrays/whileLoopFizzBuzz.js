function fizzBuzz(range) {
    var i = 1;
    while (i < range) {
        if (i%15==0) {
            console.log("fizzBuzz");
        }
        else if (i%3==0) {
            console.log("Fizz");
        }
        else if (i%5==0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
        i++;
    }
}

fizzBuzz(101)
