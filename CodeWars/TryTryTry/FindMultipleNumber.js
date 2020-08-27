function findMultiples(integer, limit) {
    var tempResult = integer
    var result = []

    while(tempResult <= limit){
        result.push(tempResult)
        tempResult += integer
    }
    
    return result
}

console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))
console.log(findMultiples(10, 50))
console.log(findMultiples(5, 7))
  