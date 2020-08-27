// [SUM OF TWO LOWEST POSITIVE NUMBERS]
// Status : Done

function sumTwoSmallestNumbers(numbers){  
    var sortNumbers = numbers.sort(function(a, b){return a-b});
    result = numbers[0] + numbers[1]

    return result
}

console.log(sumTwoSmallestNumbers([5, 7, 9, 11, 13])) // Hasil: 5 + 7 = 12
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // Hasil: 4 + 2 = 6