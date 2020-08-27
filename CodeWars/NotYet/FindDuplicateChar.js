// [FIND DUPLICATE CHAR] / [ISOGRAMS]
// Mencari Huruf Yang Duplikat Dalam Sebuah Kalimat
// Status : Done

function isIsogram(str){
    var secondStr = str
    var countStr = 0
    var output

    if(str == ''){
        output = true
    }else{
        for(var i = 0; i < str.length; i++){
            for(var j = 0; j < secondStr.length; j++){
                if(str[i].toLowerCase() == secondStr[j].toLowerCase()){
                    countStr += 1
                }
            }
    
            if(countStr > 1){
                output = false
            }else{
                countStr = 0
                output = true
            }
        }
    }

    return output
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("Saya"))
console.log(isIsogram(""))