function isPrime(val)
{
    let flag=1
    for(let i=2;i<val;i++)
    {
        if(val%i===0)
        {
            flag=0
            break
        }
    }
    return flag
}

function isArmstrong(val)
{
    let temp=val;
    let sum=0;
    while(temp>0)
    {
        let digit=temp%10
        sum+=(digit*digit*digit)
        temp=Math.trunc(temp/10);
    }
    if(sum===val)
        return 1
    else
        return 0;
}
console.log(isArmstrong(371))
console.log(isPrime(101))