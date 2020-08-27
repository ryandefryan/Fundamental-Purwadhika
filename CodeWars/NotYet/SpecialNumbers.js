// [SPECIAL NUMBERS]
// Status : Done

function specialNumber(n){
    var number = n.toString()
    var tempResult = []
    var result = 'Special!'

    for(var i = 0; i < number.length; i++){
        if(Number(number[i]) >= 0 && Number(number[i]) <= 5){
            tempResult.push('Special!')
        }else{
            tempResult.push('NOT!')
        }
    }

    for(var j = 0; j < tempResult.length; j++){
        if(tempResult[j] == 'NOT!'){
            result = 'NOT!'
        }else{
            
        }
    }

    return result
}

console.log(specialNumber(3)) // Output ---> Special!
console.log(specialNumber(5)) // Output ---> Special!
console.log(specialNumber(35)) // Output ---> Special!
console.log(specialNumber(7)) // Output ---> NOT!
console.log(specialNumber(77)) // Output ---> NOT!
console.log(specialNumber(39)) // Output ---> NOT!
console.log(specialNumber(17)) // Output ---> NOT!