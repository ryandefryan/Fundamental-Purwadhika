// [TASK 1]
// Menjumlahkan Bilangan Bertipe Data String
// Ketentuan :
//              1. Bilangan Yang Dijumlahkan Terletak Pada Index Genap (Ex. Index0, Index2, Index4, ...)
// Status : Done

function sumOdd(numbers){
    var output = 0

    // for(var i = 0; i < numbers.toString().length; i++){
    //     if(i % 2 == 0){
    //         output += Number(numbers.toString()[i])
    //     }
    // }

    for(var i = 0; i < numbers.toString().length; i += 2){
        output += Number(numbers.toString()[i])
    }

    return output
}

console.log(sumOdd(540395))
console.log(sumOdd(356083))
console.log(sumOdd(123))
