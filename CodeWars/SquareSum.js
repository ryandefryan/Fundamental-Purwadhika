// [SQUARE SUM]
// Status : Done

function squareSum(numbers){

    var result = ''
    for(var i = 0; i < numbers.length; i++){
        result += numbers[i] * numbers[i]

        result += Math.min(numbers[i])
    }

    return result
}

console.log(squareSum([1, 2])) // (1^1) + (2^2) = 1 + 4 = 5