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
