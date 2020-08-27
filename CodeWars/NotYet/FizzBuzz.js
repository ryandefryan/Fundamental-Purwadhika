// [FIZZ BUZZ]
// Ketentuan : 
//              1. Setiap Kelipatan 3, Output Menjadi 'Fizz'
//              2. Setiap Kelipatan 5, Output Menjadi 'Buzz'
//              3. Setiap Kelipatan 3 dan 5, Output Menjadi FizzBuzz
// Status : Done

function fizzbuzz(n){
    var output = []
    for(var i = 1; i <= n; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            output.push('FizzBuzz')
        }else if((i % 3 == 0)){
            output.push('Fizz')
        }else if((i % 5 == 0)){
            output.push('Buzz')
        }else{
            output.push(i)
        }
    }

    return output
}

console.log(fizzbuzz(15)) // Output: [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz]