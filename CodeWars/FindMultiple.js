// [FIND MULTIPLE]
// Status : Done

function findMultiples(integer, limit){
    var hasil = []

    var start = integer
    while(start <= limit){
        hasil.push(start)
        start += integer
    }
    return hasil
}

console.log (findMultiples(3, 10)) // [3,6,9]
console.log (findMultiples(2, 20)) // [2,4,6,8,10,12,14,16,18,20]