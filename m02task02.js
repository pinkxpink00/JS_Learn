// Task02 - create function with name task02
// Function should pass two parameters 
// and return number - sum of input parameters
// Note: strings should be casted to Number type

// TODO: Define your function here
var out;
out = Task02("24","4");
console.log(out);
out = Task02(2,2);
console.log(out);

 function Task02(param1,param2)
 {
    const num1 = typeof param1 === 'string' ? Number(param1) : param1;
    const num2 = typeof param2 === 'string' ? Number(param2) : param2;
    const sum = num1+num2;
    return sum;
 }