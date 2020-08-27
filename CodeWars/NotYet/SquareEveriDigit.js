// [SQUARE EVERY DIGIT]
// Mempangkatkan Setiap Digit Bilangan
// Status : Done

function squareDigits(num){
    var nums = num.toString()
    var result = ''

    for(var i = 0; i < nums.length; i++){
        result += Math.pow(Number(nums[i]), 2)
    }
    
    return Number(result)
}

console.log(squareDigits(9119)) // Hasil: 811181