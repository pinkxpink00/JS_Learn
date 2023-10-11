// Task03 - create a function with name task03
// function pass array and retun hash with min amd max values from array
// for example: 
// if function take [-1, 8, -3, 0, 7] it should return {min: -3, max: 8}

// TODO: Define your function here
function task03(arr) {
    if (arr.length === 0) {
      return { min: undefined, max: undefined };
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  