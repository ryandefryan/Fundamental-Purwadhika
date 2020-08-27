const iqTest = (numbers) => {
    var arrNumbers = numbers.split(' ')
    var countEven = 0
    var countOdd = 0

    for(var i = 0; i < arrNumbers.length; i++){
        if(Number(arrNumbers[i]) % 2 == 0){
            countEven++
        }else{
            countOdd++
        }
    }

    if(countEven < countOdd){
        for(var j = 0; j < arrNumbers.length; j++){
            if(Number(arrNumbers[j]) % 2 == 0){
                return j+1
            }
        }
    }else{
        for(var j = 0; j < arrNumbers.length; j++){
            if(Number(arrNumbers[j]) % 2 == 1){
                return j+1
            }
        }
    }
}

console.log(iqTest('2 4 7 8 10')) // Return 3, Karena Index ke-3 Bilangan Ganjil Sendiri
console.log(iqTest('4 5 5')) // Return 1, Karena Index ke-1 Bilangan Genap Sendiri
console.log(iqTest('1 2 1 1'))