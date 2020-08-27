function getSum( a,b )
{
    var result = 0

    for(var i = a; i <= b; i++){
        result += i
    }

    return result
}

console.log(getSum(-1,2),);