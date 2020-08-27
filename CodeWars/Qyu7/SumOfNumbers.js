// [SUM OF NUMBERS]
// Ex.  (-1, 0) ---> -1 + 0 = -1
//      (1, 2) ---> 1 + 2 = 3
//      (1, 3) ---> 1 + 2 + 3 = 6
//      (-1, 2) ---> -1 + 0 + 1 + 2 = 2
//      (1, 1) ---> 1 
//      (10, 10) ---> 10
// Status : DONE

function getSum(a, b){
    var result = 0
   
    if(a > b){
        for(var i = a; i >= b; i--){
            result += i
        }
    }

    if(a == b){
        result = a
    }
    
    if(a < b){
        for(var i = a; i <= b; i++){
            result += i
        }
    }
    
    return result
}

console.log(getSum(0,-1))
console.log(getSum(-1,2))