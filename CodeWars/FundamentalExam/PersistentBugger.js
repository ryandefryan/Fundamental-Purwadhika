// [PERSISTENT BUGGER]
// Mengalikan Bilangan Berulang-Ulang Hingga Menghasilkan 1 Digit Bilangan Saja
// Status : Done

function persistence(num) {
    var total = 0
    var numStr = num.toString()
    var a = 0
    
    do{
        for(var i = 0; i < numStr.length; i++){
            if(i == 0){
                a = Number(numStr[i])
            }else{
                a = Number(a) * Number(numStr[i])
            }
            
            if(numStr.length != 1 && i == numStr.length-1){
                numStr = a.toString()
                total ++
            }
        }
    }while(numStr.length != 1)

    return total
}

console.log(persistence(39)) // Output: 3X (Because: 3*9=27 -> 2*7=14 -> 1*4=4 ---> Total Perkalian 3X)
console.log(persistence(4)) // Output: 0X (Because: 4 Bilangan Satu Digit ---> Total Perkalian 0X)
console.log(persistence(999)) // Output: 4X (Because: 9*9*9=729 -> 7*2*9=126 -> 1*2*6=12 -> 1*2=2 ---
                              // ---> Total Perkalian 4X)