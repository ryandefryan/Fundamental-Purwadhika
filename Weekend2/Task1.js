// [FIND MAX NUMBER]

function findMax(num1, num2, num3){
    
    var maxNum = 0
    if(num1 > maxNum){
        maxNum = num1
    }

    if(num2 > maxNum){
        maxNum = num2
    }

    if(num3 > maxNum){
        maxNum = num3
    }
    return maxNum
}

console.log(findMax(3,4,5))
console.log(findMax(8,4,5))
console.log(findMax(1,9,5))
