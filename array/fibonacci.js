function Fibonacci(n)
{
    var a = 0,b = 1,sum;
    if(n < 1 || n == 1){
        sum =  n == 0? a : b;
    }else{
        for ( let c = 0;c<n-1;c++){
            sum = a + b;
            a = b;
            b = sum;
        }
    }
    console.log(sum)
}
