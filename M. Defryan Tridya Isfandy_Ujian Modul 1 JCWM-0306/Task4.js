function makeNegative(numArr){
    var result = []

    for(var i = 0; i < numArr.length; i++){
        if(numArr[i] >= 0){
            result.push(0 - numArr[i])
        }else{
            result.push(numArr[i])
        }
    }

    return result
}

console.log(makeNegative([1,-2,3,-4,5]))
console.log(makeNegative([1,2,3,4,5]))
console.log(makeNegative([-1,-2,-3,-4,-5]))