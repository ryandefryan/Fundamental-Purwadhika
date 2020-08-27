// [GENERATE RANGE]
// Status : Done

function generateRange(min, max, step){
    
    var sum = min
    var outputStep = [min]
    while(sum < max && step < max){
        sum += step
        outputStep.push(sum)
    }

    return outputStep
}

console.log(generateRange(2, 10, 2)) // Output ---> [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)) // Output ---> [1, 4, 7, 10]
console.log(generateRange(1, 5, 9)) // Output ---> [1] ---> Karena Max < Step (5 < 9)