// [FIND THE DIVISORS]
// Status : Done

function divisors(integer) {
    var result = []

    for(var i=2; i<integer; i++){
        if(integer % i == 0){
          result.push(i)
        }
    }

    if(result != 0){
        return result
    }else{
        return (integer + ' is prime!')
    }
}

console.log(divisors(12)) // Hasil : [2, 3, 4, 6]
console.log(divisors(25)) // Hasil : [5]
console.log(divisors(13)) // Hasil : 13 is prime