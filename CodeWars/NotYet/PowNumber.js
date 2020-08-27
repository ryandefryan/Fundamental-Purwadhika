// [POW NUMBER] / [NTH POWER RULES]
// Status : Done

function modifiedSum(a, n) {
    var result = 0

    for(var i = 0; i < a.length; i++){
        result += (Math.pow(a[i], n)) - a[i]
    }

    return result
}

console.log(modifiedSum([1, 2, 3], 3)) // (1^3 + 2^3 + 3^3) - (1 + 2 + 3) = 30
console.log(modifiedSum([1, 2], 5)) // (1^5 + 2^5) - (1 + 2) = 30