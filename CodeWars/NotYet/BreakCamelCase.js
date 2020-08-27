// [BREAK CAMEL CASE]
// Memberikan Spasi Sebelum Kata yang Diawali dengan Huruf Besar
// Status: Done

function solution(string){
    var output = ''

    for(var i = 0; i < string.length; i++){
        if(i != string.length-1 && string[i+1] == string.toUpperCase()[i+1]){
            output += string[i] + ' '
        }else{
            output += string[i]
        }
    }

    return output
}

console.log(solution('camelCasing'))