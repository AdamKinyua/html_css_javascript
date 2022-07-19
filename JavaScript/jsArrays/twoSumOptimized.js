const twoSumOptimized = (array, target) => {
  const hashMap = {};
  for(let i=0; i<array.length; i++) {
    if(hashMap[array[i]] >= 0) {
      console.log(hashMap)
      return [hashMap[array[i]], i]
    } else {
      const diff = target - array[i];
      hashMap[diff] = i;
    }
  }
  return null
}


console.log(twoSumOptimized([1,3,7,9,2], 11))
