var i,base,power,result;

base = 2; power = 2;
pow();
console.log(result);

base = 4; power = 5;
pow();
console.log(result);

function pow()
{
    result = 1;
    for (i=0;i<power;i++)
    {
        result *= base;
    }
}