// [KEBABIZE]
// Ketentuan :
//              1. Memberikan Tanda '-' Sebelum Huruf Besar
//              2. Mengubah Huruf Besar Tersebut Menjadi Huruf Kecil
//              3. Menghilangkan Angka
// Ex. whatAreYouDoing ---> what-Are-You-Doing
// Status : Done

function kebabize(str) {
    var output = ''

    for(var i = 0; i < str.length; i++){
        if(str[i] >= 0 && str[i] <= 9){
            output += ''
        }else if(str[i] == '-'){
            output += str[i]
        }else if(str[i] == str[i].toUpperCase()){
            output += '-' + str[i].toLowerCase()
        }else{
            output += str[i]
        }
    }

    return output
}

console.log(kebabize('myCamelCasedString')) // Output: my-camel-cased-string
console.log(kebabize('myCamelHas3Humps')) // Output: my-camel-has-humps
console.log(kebabize('lqspc')) // lqspc