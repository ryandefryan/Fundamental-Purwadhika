// [CONVERT STRING TO CAMEL CASE]
// Mengubah Huruf Besar Pada Setiap Kata Setelah Tanda '-' (Huruf Pertama Pada Awal Kata Tidak Diubah)
// Lalu Menghilangkan Tanda '-'
// Status : Done

function toCamelCase(str){
    var output = ''

    for(var i = 0; i < str.length; i++){
        if(i == 0){
            output += str[i]
        }else if(str[i-1] == '-' || str[i-1] == '_'){
            output += str[i].toUpperCase()
        }else{
            output += str[i]
        }
    }

    output = output.replace(/-/g, '')
    output = output.replace(/_/g, '')
    return output
}

console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"))