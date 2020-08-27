// [TASK 3]
// Menjumlahkan Bilangan Di Dalam Sebuah Variabel String Yang Terdiri Dari Bilangan dan Huruf
// Status : Done

function sumOnlyNum(str){
    var output = 0

    for(var i = 0; i < str.length; i++){
        if(str[i] >= 0 && str[i] <= 9){
           output += Number(str[i])
        }
    }

    return output
}

console.log(sumOnlyNum('hello123')) // Output: 1 + 2 + 3 = 6 
console.log(sumOnlyNum('ak1u4h')) // Output: 1 + 4 = 5
console.log(sumOnlyNum('siap86')) // Output: 8 + 6 = 14