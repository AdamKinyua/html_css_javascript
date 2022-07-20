//Q: Given two strings S and T, return if they are equal when both are typed out. Any '#' that appears in the string counts as a backspace

const typedOutStrings = (S,T) => {
  var sumT = 0, sumS = 0;
  for(let i=0; i<S.length; i++) {
    if(S[i] === "#") {
      sumS -= 1;
    } else {sumS += 1 }
    
  }
  for(let j=0; j<T.length; j++) {
    if(T[j] === "#") {
      sumT -= 1;
    } else {sumT += 1 }
  }
  if(sumT === sumS) {
    return true;
  } else {
    return false;
  }
} 

S = "abc###ef";
T = "sm";
console.log(typedOutStrings(S,T));
