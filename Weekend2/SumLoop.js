// [SUM LOOP]

function sumLoop(num1, maxNum, num2){

    var sum = 0

    while(num1 < maxNum){
        sum += num1
        num1 = num1 + num2
    }

    return sum
}

console.log(sumLoop(0, 5, 1)) // Return 10 -> 0+1+2+3+4
console.log(sumLoop(1, 10, 3)) // Return 12 -> 1+4+7
console.log(sumLoop(2, 8, 4)) // Return 8 -> 2+6