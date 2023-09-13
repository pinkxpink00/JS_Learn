// Task03 - create 2 functions: task03a and task03b
// First function should pass parameter and divide it on 2
// result function should return.
// Second function should call first function and 
// return it result concat with string "result - "
//
// For example: you get in second function a number 6
// Result of call both function shoul be like "result - 3"

// TODO: Define your function here
const inputNumber = 6;
const result = task03b(inputNumber);
console.log(result); 

function task03a(param1)
{
    var divide = 2;
    const result = Number(param1)/divide;
    return result;
}
function task03b(param1)
{
    const result = task03a(param1); 
    return "result - " + result;
}
