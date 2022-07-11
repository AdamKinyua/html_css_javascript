const List = ['Nemo', 'Marlin', 'Paper'];
const List2 = ['x','y'];

function findNemo(array) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'Nemo') {
      console.log("Nemo Found");
      break;
    }
  }
}


//Another way to loop through 

const findNemo2 = array => {
  array.forEach(j => {
    if(j === 'Nemo') {
      console.log("Found Nemo2");
    }
  })
}


//Third way of doing this


const findNemo3 = array => {
  for (let k of array) {
    if(k === 'Nemo') {
      console.log("Found Nemo3");
    }
  }
}


//RUNNING THE FUNCTIONS TO MAKE SURE THEY BOTH WORK
findNemo(List);
findNemo2(List);
findNemo3(List)
