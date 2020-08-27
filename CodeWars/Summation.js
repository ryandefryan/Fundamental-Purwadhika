// [SUMMATION] / [GRASSHOPER SUMMATION]
// Misal Diberi Inputan 8, Maka Hasil Akhir Akan Menjumlahkan Bilangan 1 - 8 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
// Status : Done

var summation = function (num) {
    var output = 0

    for(var i = 1; i <= num; i++){
        output += i
    }

    return output
}

console.log(summation(1))
console.log(summation(8))