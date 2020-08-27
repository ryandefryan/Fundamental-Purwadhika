// [SUM MIX]
// Status : Done
// Ketentuan : Menjumlahkan Bilangan Bertipe Data Number dan String Pada Array

function sumMix(x){

    var output = []
    var total = 0

    for(i = 0; i < x.length; i++){
        output.push(parseInt(x[i]))
        total += output[i]
    }

    return total
}

console.log(sumMix([9, 3, '7', '3']))