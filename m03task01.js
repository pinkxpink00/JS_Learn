﻿// Task01 - create a function with name task01
// function pass three numbers and multiples those that less than zero
// if all numbers are positive function should return undefined
// for example: 
// if function take 3, -2 and -5 it should return 10

// TODO: Define your function here
function task01(a, b, c) {
    if (a < 0) {
      a = 0;
    }
    if (b < 0) {
      b = 0;
    }
    if (c < 0) {
      c = 0;
    }
  
    if (a === 0 && b === 0 && c === 0) {
      return undefined;
    } else {
      return a * b * c;
    }
  }