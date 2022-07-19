function twoSum(num_list, target) {
  //let sol = [];
  for(i=0; i<num_list.length; i++) {
    var diff = target - num_list[i];
    for(j=i+1; j<num_list.length; j++) {
      if(num_list[j] === diff){
        return [i,j]
      }
      
    }
  }
  return null
}

l = [1,3,7,9,2];
console.log(twoSum(l,25));


// ########################################################################
// Using dictionaries
########################################################################### 
const twoSum = (num_list, target) => {
￼ var dic = {};
  for(i=0; i<num_list.length; i++) {
    dic[num_list[i]] = num_list[i];
  }
  ￼
  for(i=0; i<num_list.length; i++)  {
    var diff = target - num_list[i];
    if(dic[diff]) {
      return [i, num_list.indexOf(diff)]
    }
  }
}
￼
￼
console.log(twoSum([1,3,7,9,2], 11));
￼
￼
//time => O(n + n)* => O(n)
//space => O(n) =>     O(n)

#####################################################
// Hash_Tables#######################################
#####################################################

const twoSum = (numList, target) => {
  var sol = {};
  for(i=0; i<numList.length; i++) {
    const solCurrent = sol[numList[i]];
    //console.log(solCurrent)
    if(solCurrent != null){
      return [solCurrent,i]
    }
    else{
      sol[target - numList[i]] = i
    }
    console.log(sol)
  }

}

console.log(twoSum([1,3,7,9,2], 11))
