// [SUM ODD NUMBERS]
// Menghitung Jumlah Bilangan Ganjil
// Status : Done

function rowSumOddNumbers(n) {
    var oddNumber = 1
    var oddNumberResult = []
    var result = 0

	while(oddNumberResult.length != n){
        if(oddNumber % 2 != 0){
            oddNumberResult.push(oddNumber)
            oddNumber += 2
        }
    }

    for(var i=0; i<oddNumberResult.length; i++){
        result += oddNumberResult[i]
    }

    return result
}

console.log(rowSumOddNumbers(2))
console.log(rowSumOddNumbers(1000))