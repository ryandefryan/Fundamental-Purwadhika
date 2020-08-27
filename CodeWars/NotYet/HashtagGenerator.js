// [HASHTAG GENERATOR]
// Ketentuan :
//              1. Apabila 'output.length == 0', Maka False (Karena 'str' Kosong)
//              2. Apabila 'output.length == 1', Maka False (Karena 'str' Berisi Spasi Saja dan Program Menghasilkan '#' -
//                 Sehingga 'output.length == 1'
//              3. Apabila 'output.length > 140', Maka False (Karena Jumlah Karakter Maksimum 140)
// Status : Done

function generateHashtag(str){
    output = ''

    for(var i = 0; i < str.length; i++){
        if(i == 0){
            output += '#' + str[i].toUpperCase()
        }else if(str[i-1] == ' '){
            output += str[i].toUpperCase()
        }else{
            output += str[i]
        }
    }

    output = output.replace(/ /g, '')
    if(output.length == 0 || output.length == 1 || output.length > 140){
        return false
    }
  
    return output
}

console.log(generateHashtag("")) // False
console.log(generateHashtag("Do We have A Hashtag")) // Output: #DoWeHaveAHashtag
console.log(generateHashtag("code" + " ".repeat(140) + "wars")) // Output: #CodeWars
