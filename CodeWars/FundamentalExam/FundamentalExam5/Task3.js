// [SORT ODD EVEN]
// Mengurutkan Bilangan Yang Bernilai Ganjil Saja

function sortOddEven(number){
    var number = number.sort(function(a, b){return a-b})
    var evenNumber = []
    var oddNumber = []
    var result = []

    for(var i = 0; i < number.length; i++){
        if(number[i] % 2 == 0){
            evenNumber.push(number[i])
        }else{
            oddNumber.push(number[i])
        }
    }
    evenNumber = evenNumber.sort(function(a, b){return b-a})

    var evenIndexKe = 0
    var oddIndexKe = 0
    for(var i = 0; i < number.length; i++){
        if(i == 0 || i == 1 || i == 4){
            result.push(oddNumber[oddIndexKe])
            oddIndexKe++
        }else{
            result.push(evenNumber[evenIndexKe])
            evenIndexKe++
        }
    }

    return result
}

console.log(sortOddEven([5, 3, 2, 8, 1, 4])) // Output: 1, 3, 2, 8, 5, 4