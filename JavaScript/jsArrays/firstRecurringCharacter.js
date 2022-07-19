//Method 1: Nested Loops: [O(n**2)]

const firstRecurringCharacter = (array) => {
  for(let i=0; i<array.length; i++) {
    for(let j=i+1; j<array.length; j++) {
      if(array[i] === array[j]) {
        return array[i]
      }
    }
  }
  return null
}


console.log(firstRecurringCharacter([1,8,5,5,7,8,4,2,8,9,5,3]))


//########################################################
//Method 2: HashTables [O(n)]
const firstRecurringCharacter2 = (array2) => {
  let map = {};
  for(i=0; i<array2.length; i++) {
    if(map[array2[i]]){
      return array2[i]
    } else {
      map[array2[i]] = i;
    }
    //console.log(map)
  }
  return null
}

console.log(firstRecurringCharacter2([1,8,5,5,7,8,4,2,8,9,5,3]))

//########################################################
//Method 3: HashTables 
 
function firstRecurringCharacter3(input) {
  for (let i = 1; i < input.length-1; i++) {
    for (let j = 0; j < input.length; j++) {
      if((input[j] === input[j+i])&&((j+i)<=input.length) ) {
        return input[j];
      }
    }
  }
  return undefined
}

console.log(firstRecurringCharacter3([1,8,5,5,7,8,4,2,8,9,5,3]))
