// Reverse a string 
// Method 1

function reverse(str) {

  // First check the input; we cannot assusme that we will always get a string
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "too short string or no string inputed";
  }

  // converting the string to array 
  const backwards = [];
  const totalItems = str.length-1 ;
  for (let i = totalItems; i>=0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards)

  return backwards.join('');
}


// Method 2 - Using built in methods
function reverse2(str) {
  // let's skip input validation
  return str.split('').reverse().join('');
}

//Method 3 - using modern cleaner way; ES 6 Syntax in Java
// function reverse3 that takes in a string and 
const reverse3 = str => str.split('').reverse().join('');

//Method 4 - Using a new feature in Java Script which is spread operator
const reverse4 = str => [...str].reverse().join('');


console.log(reverse('Today is on Monday'));
console.log(reverse2('Today is on Monday'));
console.log(reverse3('Today is on Monday'));
console.log(reverse4('Today is on Monday'));
console.log(..."MIKE") // spread operator
