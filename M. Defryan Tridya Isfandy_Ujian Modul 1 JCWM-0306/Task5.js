function alphaForwad(str, num){
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var output = str.slice(num)
    
    // Mencari Index dari Huruf Terakhir
    var lastAlphaIndex = 0
    for(var i = 0; i < alpha.length; i++){
        if(alpha[i] == str[str.length-1]){
            lastAlphaIndex = i+1
        }
    }

    // Melanjutkan Hurufnya
    for(var i = lastAlphaIndex; i <= lastAlphaIndex+num-1; i++){
        output += alpha[i]
    }

    return output
}

console.log(alphaForwad('abc', 1)) // Output: bce
console.log(alphaForwad('abc', 2)) // Output: cde
console.log(alphaForwad('opq', 2)) // Output: qrs
console.log(alphaForwad('vwx', 1))