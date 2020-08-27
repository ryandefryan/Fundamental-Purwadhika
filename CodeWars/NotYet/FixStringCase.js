// [FIX STRING CASE]
// Status : Done

function solve(s){
    var countLowCase = 0
    var countUpperCase = 0

    for(var i = 0; i < s.length; i++){
        if(s[i] == s.toLowerCase()[i]){
            countLowCase += 1
        }else{
            countUpperCase += 1
        }
    }

    if(countLowCase >= countUpperCase){
        return s.toLowerCase()
    }else{
        return  s.toUpperCase()
    }
}

console.log(solve("Code")) // Karena Lower Case Lebih Banyak, Maka Hasilnya : code
console.log(solve("code")) // Karena Lower Case Lebih Banyak, Maka Hasilnya : code
console.log(solve("CODe")) // Karena Upper Case Lebih Banyak, Maka Hasilnya : CODE
console.log(solve("CoDE")) // Karena Upper Case Lebih Banyak, Maka Hasilnya : CODE
console.log(solve("COde")) // Karena Lower Case Lebih Banyak, Maka Hasilnya : code