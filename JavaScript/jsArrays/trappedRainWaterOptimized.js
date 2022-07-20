array = [0,1,0,2,1,0,3,1,0,1,2];

const trappedRainWaterOptimized = (array) => {
  //step 1: initialize rightpointer, left pointer, leftmax, and right max
  var pL = 0, pR = array.length-1, maxL = 0, maxR = 0, total = 0;
  while(pL < pR) {
    if(array[pL] <= array[pR])  {// step 1
      if(array[pL] >= maxL) {
        maxL = array[pL]; 
      } else {
        total += maxL - array[pL];
      }
      pL++
    } 
      if(array[pR] >= maxR) {
          maxR = array[pR]; 
      } else {
        total += maxR - array[pR];
      }
      pR--
    
  }
  return total
  
}


console.log(trappedRainWaterOptimized(array));

// logic:
// // 1. Identify pointer with lesser value 
// 2. Is this the pointer greater than or equal to the max on that side; if true, update the max on that setImmediate
//    else, get the water for that pointer and add it to the total 

// then move the pointer inwards for whichever respective code we are in; repeat this for the other pointer
