// [YOU ARE SQUARE]
// Mencari Bilangan Hasil Dari Kuadrat
// Ex. 25 ---> True (5^), 4 ---> True (2^), 10 ---> False
// Status : Done

var isSquare = function(n){

    var result = 0
    result = (Math.sqrt(n))
    
    if(n % result == 0 || result == 0){
        return true
    }else{
        return false
    }
}

console.log(isSquare(4))
console.log(isSquare(14))
console.log(isSquare(5))
console.log(isSquare(0))