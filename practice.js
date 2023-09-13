var i,out;

out = pow(2,2);
console.log(out);

out = pow(5,5);
console.log(out);

function pow(base,power)
{
    result = 1;
    for (i=0;i<power;i++)
    {
        result *= base;
    }
    return result;
}