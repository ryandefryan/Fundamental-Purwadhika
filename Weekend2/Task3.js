// [FIND DIGITS]

function findDigits(digitToFind, number){
    
    for(var i = 0; i < number.length; i++){
        if(digitToFind == number[i]){
            return true
        }
    }

    return false
}

console.log(findDigits(5,[2,4,5]))
console.log(findDigits(3,[2,4,5]))
console.log(findDigits(1,[2,4,5]))