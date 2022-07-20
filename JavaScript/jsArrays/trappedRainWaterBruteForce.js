const trappedRainWater = (array) => {
  let totalWater = 0;
  for (let p=0; p< array.length; p++) {
    let pLeft = p, pRight = p, maxLeft = 0, maxRight = 0;
    while (pLeft >=0) {
      maxLeft = Math.max(maxLeft, array[pLeft]);
      pLeft-- ;
    }
    while( pRight < array.length) {
      maxRight = Math.max(maxRight, array[pRight]);
      pRight++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - array[p];
    if(currentWater >= 0) {
      totalWater += currentWater;
    } 
  }
  return totalWater;
}

//testcases
array1 = [0,1,0,2,1,0,3,1,0,1,2];
array2 = []
console.log(trappedRainWater(array1));
