﻿// Task06 - Write a code that returns number - result of sum 3 numbers:
// -- first should be extracted from String, second - should be Boolean.
// For example, "10" and true - as a result you get 11 
// or "2long" and true give you 3.

function task06(string, boolean) {
    // TODO: Write your code here
    const numFromString = parseInt(string,10);

    if (boolean === true){
        return numFromString +1;
    }

    return numFromString;
}