function fibonacciGenerator(n) {
    var output = []
    if (n === 1) {
        output = [0];
    } else if (n == 2) {
        output = [0, 1];
    } else {
        output = [0, 1]

        for (var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output
}

fibonacciGenerator(100);


function fibbonacci_Seq(n) {
  seq = [];
  if(n===1) {
    seq = [0];
  } else if(n==2) {
    seq = [0,1];
  } else {
    seq = [0,1]
    for(var i = 2; i < n; i++) {
      seq.push(seq[seq.length-2] + seq[seq.length-1])
    }
  } return seq;
}

console.log(fibbonacci_Seq(200))

